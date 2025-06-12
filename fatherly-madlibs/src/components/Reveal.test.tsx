import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Reveal } from './Reveal';
import { AppStateProvider } from '../context/AppStateContext';
import type { MadLibInputs } from '../types/MadLibInputs';

// Mock navigation
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockInputs: MadLibInputs = {
  adjective1: 'happy',
  adjective2: 'silly',
  noun1: 'dragon',
  noun2: 'castle',
  verb1: 'jump',
  verb2: 'dance',
  adverb1: 'quickly',
  adverb2: 'carefully',
  exclamation: 'Wow',
  familyMember: 'Dad',
};

const renderReveal = (initialSlideIndex = 0) => {
  const mockSetInputs = vi.fn();
  const mockSetSlideIndex = vi.fn();

  return {
    ...render(
      <MemoryRouter>
        <AppStateProvider
          initialState={{
            inputs: mockInputs,
            slideIndex: initialSlideIndex,
            setInputs: mockSetInputs,
            setSlideIndex: mockSetSlideIndex,
          }}
        >
          <Reveal />
        </AppStateProvider>
      </MemoryRouter>
    ),
    mockSetInputs,
    mockSetSlideIndex,
  };
};

describe('Reveal Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('redirects to home if no inputs are present', () => {
    render(
      <MemoryRouter>
        <AppStateProvider
          initialState={{
            inputs: null,
            slideIndex: 0,
            setInputs: vi.fn(),
            setSlideIndex: vi.fn(),
          }}
        >
          <Reveal />
        </AppStateProvider>
      </MemoryRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('displays the first slide with navigation buttons', () => {
    renderReveal();

    expect(screen.getByText(/Back/)).toBeInTheDocument();
    expect(screen.getByText(/Next/)).toBeInTheDocument();
    expect(screen.getByText(/Back/)).toBeDisabled();
    expect(screen.getByText(/Next/)).not.toBeDisabled();
  });

  it('handles keyboard navigation', () => {
    const { mockSetSlideIndex } = renderReveal(1);

    // Press left arrow
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(mockSetSlideIndex).toHaveBeenCalledWith(0);

    // Press right arrow
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(mockSetSlideIndex).toHaveBeenCalledWith(2);
  });

  it('disables navigation buttons appropriately', () => {
    // First slide
    const { rerender } = renderReveal(0);
    expect(screen.getByText(/Back/)).toBeDisabled();
    expect(screen.getByText(/Next/)).not.toBeDisabled();

    // Last slide
    rerender(
      <MemoryRouter>
        <AppStateProvider
          initialState={{
            inputs: mockInputs,
            slideIndex: 4,
            setInputs: vi.fn(),
            setSlideIndex: vi.fn(),
          }}
        >
          <Reveal />
        </AppStateProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Back/)).not.toBeDisabled();
    expect(screen.getByText(/Next/)).toBeDisabled();
  });

  it('displays images with correct alt text', () => {
    renderReveal();
    const image = screen.getByAltText('Illustration for this mad lib section');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/section-1.png');
  });
}); 