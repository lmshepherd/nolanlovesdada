import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAppState } from '../context/AppStateContext';
import type { MadLibInputs } from '../types/MadLibInputs';
import { colors } from '../theme/colors';
import { isFormValid } from '../utils/isFormValid';
import { Button } from './Button';

const initialInputs: MadLibInputs = {
  adjective1: '',
  adjective2: '',
  noun1: '',
  noun2: '',
  verb1: '',
  verb2: '',
  adverb1: '',
  adverb2: '',
  exclamation: '',
  familyMember: '',
};

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${colors.text};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${colors.text};
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 2px solid ${colors.gray.medium};
  font-size: 1rem;
  font-family: 'Patrick Hand', cursive;
  transition: border-color 0.2s ease;
  background-color: ${colors.white};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.gray.medium};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const MadLibForm = () => {
  const [inputs, setInputs] = useState<MadLibInputs>(initialInputs);
  const { setInputs: setAppInputs } = useAppState();
  const navigate = useNavigate();

  const valid = isFormValid(inputs);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valid) {
      setAppInputs(inputs);
      navigate('/reveal');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Fill in the blanks to create a funny story!</Title>

      <FormGroup>
        <Label htmlFor="adjective1">First Adjective (describing word)</Label>
        <Input
          type="text"
          id="adjective1"
          name="adjective1"
          value={inputs.adjective1}
          onChange={handleChange}
          placeholder="e.g., silly"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="adjective2">Second Adjective</Label>
        <Input
          type="text"
          id="adjective2"
          name="adjective2"
          value={inputs.adjective2}
          onChange={handleChange}
          placeholder="e.g., happy"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="noun1">First Noun (person, place, or thing)</Label>
        <Input
          type="text"
          id="noun1"
          name="noun1"
          value={inputs.noun1}
          onChange={handleChange}
          placeholder="e.g., dragon"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="noun2">Second Noun</Label>
        <Input
          type="text"
          id="noun2"
          name="noun2"
          value={inputs.noun2}
          onChange={handleChange}
          placeholder="e.g., castle"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="verb1">First Verb (action word)</Label>
        <Input
          type="text"
          id="verb1"
          name="verb1"
          value={inputs.verb1}
          onChange={handleChange}
          placeholder="e.g., jump"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="verb2">Second Verb</Label>
        <Input
          type="text"
          id="verb2"
          name="verb2"
          value={inputs.verb2}
          onChange={handleChange}
          placeholder="e.g., dance"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="adverb1">First Adverb (describes a verb)</Label>
        <Input
          type="text"
          id="adverb1"
          name="adverb1"
          value={inputs.adverb1}
          onChange={handleChange}
          placeholder="e.g., quickly"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="adverb2">Second Adverb</Label>
        <Input
          type="text"
          id="adverb2"
          name="adverb2"
          value={inputs.adverb2}
          onChange={handleChange}
          placeholder="e.g., carefully"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="exclamation">Exclamation (something you shout)</Label>
        <Input
          type="text"
          id="exclamation"
          name="exclamation"
          value={inputs.exclamation}
          onChange={handleChange}
          placeholder="e.g., Wow"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="familyMember">Family Member</Label>
        <Input
          type="text"
          id="familyMember"
          name="familyMember"
          value={inputs.familyMember}
          onChange={handleChange}
          placeholder="e.g., Dad"
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!valid}>
          Create Story!
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default MadLibForm; 