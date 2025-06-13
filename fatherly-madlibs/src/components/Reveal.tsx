import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAppState } from '../context/AppStateContext';
import { templates } from '../data/templates';
import { colors } from '../theme/colors';
import type { MadLibInputs } from '../types/MadLibInputs';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.background};
  color: ${colors.text};
`;

const StoryContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
  font-size: 1.2rem;
  line-height: 1.6;
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.primaryDark};
  }

  &:disabled {
    background-color: ${colors.disabled};
    cursor: not-allowed;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

interface RevealProps {
  inputs: MadLibInputs | null;
}

export default function Reveal({ inputs }: RevealProps) {
  const navigate = useNavigate();
  const { slideIndex, setSlideIndex } = useAppState();

  useEffect(() => {
    if (!inputs) {
      navigate('/');
    }
  }, [inputs, navigate]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && slideIndex > 0) {
        setSlideIndex(slideIndex - 1);
      } else if (event.key === 'ArrowRight' && slideIndex < 3) {
        setSlideIndex(slideIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, setSlideIndex]);

  if (!inputs) {
    return null;
  }

  const sectionKeys = ['boonie', 'mama', 'nolan', 'dada'] as const;
  const currentSection = sectionKeys[slideIndex];
  const currentTemplate = templates[currentSection];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <StoryContainer>{currentTemplate(inputs)}</StoryContainer>
      <Image
        src={`/images/section-${slideIndex + 1}.png`}
        alt="Illustration for this mad lib section"
      />
      <NavigationContainer>
        <Button
          onClick={() => setSlideIndex(slideIndex - 1)}
          disabled={slideIndex === 0}
        >
          Back
        </Button>
        <Button
          onClick={() => setSlideIndex(slideIndex + 1)}
          disabled={slideIndex === 3}
        >
          Next
        </Button>
      </NavigationContainer>
    </Container>
  );
} 