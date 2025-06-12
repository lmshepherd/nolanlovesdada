import React from 'react';
import type { MadLibInputs } from '../types/MadLibInputs';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';

interface SectionProps {
  template: string;
  inputs: MadLibInputs;
  imageUrl: string;
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const StoryText = styled.p`
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  line-height: 1.6;
  color: ${colors.text};
  text-align: center;
`;

const StoryImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Section: React.FC<SectionProps> = ({ template, inputs, imageUrl }) => {
  const fillTemplate = (template: string, inputs: MadLibInputs): string => {
    let filledTemplate = template;
    Object.entries(inputs).forEach(([key, value]) => {
      filledTemplate = filledTemplate.replace(`{${key}}`, value);
    });
    return filledTemplate;
  };

  return (
    <SectionContainer>
      <StoryText>{fillTemplate(template, inputs)}</StoryText>
      <StoryImage src={imageUrl} alt="Illustration for this mad lib section" />
    </SectionContainer>
  );
}; 