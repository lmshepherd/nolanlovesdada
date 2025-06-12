import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Section } from './Section';
import { useAppState } from '../context/AppStateContext';
import { colors } from '../theme/colors';
import { templates } from '../data/templates';
import { Button } from './Button';

const RevealContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${colors.background};
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  margin-top: auto;
`;

export const Reveal: React.FC = () => {
  const navigate = useNavigate();
  const { inputs, slideIndex, setSlideIndex } = useAppState();

  useEffect(() => {
    // Redirect to form if no inputs are present
    if (!inputs || Object.values(inputs).some(value => !value)) {
      navigate('/');
    }
  }, [inputs, navigate]);

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && slideIndex > 0) {
        setSlideIndex(slideIndex - 1);
      } else if (e.key === 'ArrowRight' && slideIndex < templates.length - 1) {
        setSlideIndex(slideIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slideIndex, setSlideIndex]);

  if (!inputs) {
    return null;
  }

  const handleBack = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNext = () => {
    if (slideIndex < templates.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const currentTemplate = templates[slideIndex];
  const filledTemplate = currentTemplate(inputs);

  return (
    <RevealContainer>
      <Section
        template={filledTemplate}
        inputs={inputs}
        imageUrl={`/images/section-${slideIndex + 1}.png`}
      />
      <NavigationContainer>
        <Button
          onClick={handleBack}
          disabled={slideIndex === 0}
          aria-label="Previous slide"
          variant="secondary"
        >
          ← Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={slideIndex === templates.length - 1}
          aria-label="Next slide"
        >
          Next →
        </Button>
      </NavigationContainer>
    </RevealContainer>
  );
}; 