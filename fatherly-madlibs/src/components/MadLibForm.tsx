import { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';
import type { MadLibInputs } from '../types/MadLibInputs';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${colors.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  background: ${colors.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: ${colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${colors.text};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${colors.text};
  border-radius: 4px;
  background: ${colors.background};
  color: ${colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${colors.primary};
    opacity: 0.9;
  }

  &:disabled {
    background: ${colors.text};
    cursor: not-allowed;
  }
`;

const initialInputs: MadLibInputs = {
  boonie: {
    adjective1: '',
    adjective2: '',
    noun1: '',
    noun2: '',
    verb1: '',
    verb2: '',
    adverb1: '',
    adverb2: '',
    exclamation: '',
  },
  mama: {
    adjective1: '',
    adjective2: '',
    noun1: '',
    noun2: '',
    verb1: '',
    verb2: '',
    adverb1: '',
    adverb2: '',
    exclamation: '',
  },
  nolan: {
    adjective1: '',
    adjective2: '',
    noun1: '',
    noun2: '',
    verb1: '',
    verb2: '',
    adverb1: '',
    adverb2: '',
    exclamation: '',
  },
  dada: {
    adjective1: '',
    adjective2: '',
    noun1: '',
    noun2: '',
    verb1: '',
    verb2: '',
    adverb1: '',
    adverb2: '',
    exclamation: '',
  },
};

interface MadLibFormProps {
  onSubmit: (inputs: MadLibInputs) => void;
}

export default function MadLibForm({ onSubmit }: MadLibFormProps) {
  const [inputs, setInputs] = useState<MadLibInputs>(initialInputs);

  const handleChange = (section: keyof MadLibInputs, field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  const isFormValid = () => {
    return Object.values(inputs).every(section =>
      Object.values(section as Record<string, string>).every(value => value.trim() !== '')
    );
  };

  const renderSection = (section: keyof MadLibInputs, title: string) => (
    <Section key={section}>
      <SectionTitle>{title}</SectionTitle>
      <InputGrid>
        <InputGroup>
          <Label>Adjective 1</Label>
          <Input
            type="text"
            value={inputs[section].adjective1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'adjective1', e.target.value)}
            placeholder="Enter an adjective"
          />
        </InputGroup>
        <InputGroup>
          <Label>Adjective 2</Label>
          <Input
            type="text"
            value={inputs[section].adjective2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'adjective2', e.target.value)}
            placeholder="Enter an adjective"
          />
        </InputGroup>
        <InputGroup>
          <Label>Noun 1</Label>
          <Input
            type="text"
            value={inputs[section].noun1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'noun1', e.target.value)}
            placeholder="Enter a noun"
          />
        </InputGroup>
        <InputGroup>
          <Label>Noun 2</Label>
          <Input
            type="text"
            value={inputs[section].noun2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'noun2', e.target.value)}
            placeholder="Enter a noun"
          />
        </InputGroup>
        <InputGroup>
          <Label>Verb 1</Label>
          <Input
            type="text"
            value={inputs[section].verb1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'verb1', e.target.value)}
            placeholder="Enter a verb"
          />
        </InputGroup>
        <InputGroup>
          <Label>Verb 2</Label>
          <Input
            type="text"
            value={inputs[section].verb2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'verb2', e.target.value)}
            placeholder="Enter a verb"
          />
        </InputGroup>
        <InputGroup>
          <Label>Adverb 1</Label>
          <Input
            type="text"
            value={inputs[section].adverb1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'adverb1', e.target.value)}
            placeholder="Enter an adverb"
          />
        </InputGroup>
        <InputGroup>
          <Label>Adverb 2</Label>
          <Input
            type="text"
            value={inputs[section].adverb2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'adverb2', e.target.value)}
            placeholder="Enter an adverb"
          />
        </InputGroup>
        <InputGroup>
          <Label>Exclamation</Label>
          <Input
            type="text"
            value={inputs[section].exclamation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(section, 'exclamation', e.target.value)}
            placeholder="Enter an exclamation"
          />
        </InputGroup>
      </InputGrid>
    </Section>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Your Mad Libs Story</Title>
      {renderSection('boonie', 'Boonie')}
      {renderSection('mama', 'Mama')}
      {renderSection('nolan', 'Nolan')}
      {renderSection('dada', 'Dada')}
      <SubmitButton type="submit" disabled={!isFormValid()}>
        Generate Story
      </SubmitButton>
    </Form>
  );
} 