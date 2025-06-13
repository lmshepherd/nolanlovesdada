import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Reveal from './Reveal';
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
  boonie: {
    adjective1: 'happy',
    adjective2: 'playful',
    noun1: 'ball',
    noun2: 'toy',
    verb1: 'run',
    verb2: 'jump',
    adverb: 'quickly',
    exclamation: 'Woof',
  },
  mama: {
    adjective1: 'warm',
    adjective2: 'bubbly',
    noun1: 'duck',
    noun2: 'boat',
    verb1: 'splash',
    verb2: 'play',
    adverb: 'happily',
    exclamation: 'Splash',
  },
  nolan: {
    adjective1: 'fun',
    adjective2: 'colorful',
    noun1: 'blocks',
    noun2: 'cups',
    verb1: 'stack',
    verb2: 'build',
    adverb: 'carefully',
    exclamation: 'Wow',
  },
  dada: {
    adjective1: 'exciting',
    adjective2: 'amazing',
    noun1: 'home run',
    noun2: 'fans',
    verb1: 'cheer',
    verb2: 'clap',
    adverb: 'loudly',
    exclamation: 'Yay',
  },
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
          <Reveal inputs={mockInputs} />
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
          <Reveal inputs={null} />
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
          <Reveal inputs={mockInputs} />
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

  it('renders the story with filled inputs', () => {
    render(<Reveal inputs={mockInputs} />);
    expect(screen.getByText(/Boonie's Adventure/)).toBeInTheDocument();
    expect(screen.getByText(/Bath Time Fun/)).toBeInTheDocument();
    expect(screen.getByText(/A Day at Daycare/)).toBeInTheDocument();
    expect(screen.getByText(/Sports Day/)).toBeInTheDocument();
  });
}); 