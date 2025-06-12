import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import type { MadLibInputs } from '../types/MadLibInputs';
import { colors } from '../theme/colors';
import { isFormValid } from '../utils/isFormValid';

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

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${colors.gray.medium}`,
    fontSize: '1rem',
    fontFamily: 'Patrick Hand, cursive',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: colors.text,
    fontSize: '1.1rem',
  };

  const buttonStyle = {
    backgroundColor: valid ? colors.primary : colors.gray.medium,
    color: colors.white,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1.2rem',
    cursor: valid ? 'pointer' : 'not-allowed',
    fontFamily: 'Patrick Hand, cursive',
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: colors.text }}>
        Fill in the blanks to create a funny story!
      </h2>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="adjective1">
          First Adjective (describing word)
        </label>
        <input
          type="text"
          id="adjective1"
          name="adjective1"
          value={inputs.adjective1}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., silly"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="adjective2">
          Second Adjective
        </label>
        <input
          type="text"
          id="adjective2"
          name="adjective2"
          value={inputs.adjective2}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., happy"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="noun1">
          First Noun (person, place, or thing)
        </label>
        <input
          type="text"
          id="noun1"
          name="noun1"
          value={inputs.noun1}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., dragon"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="noun2">
          Second Noun
        </label>
        <input
          type="text"
          id="noun2"
          name="noun2"
          value={inputs.noun2}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., castle"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="verb1">
          First Verb (action word)
        </label>
        <input
          type="text"
          id="verb1"
          name="verb1"
          value={inputs.verb1}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., jump"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="verb2">
          Second Verb
        </label>
        <input
          type="text"
          id="verb2"
          name="verb2"
          value={inputs.verb2}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., dance"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="adverb1">
          First Adverb (describes a verb)
        </label>
        <input
          type="text"
          id="adverb1"
          name="adverb1"
          value={inputs.adverb1}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., quickly"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="adverb2">
          Second Adverb
        </label>
        <input
          type="text"
          id="adverb2"
          name="adverb2"
          value={inputs.adverb2}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., carefully"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle} htmlFor="exclamation">
          Exclamation (something you shout)
        </label>
        <input
          type="text"
          id="exclamation"
          name="exclamation"
          value={inputs.exclamation}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., Wow"
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={labelStyle} htmlFor="familyMember">
          Family Member
        </label>
        <input
          type="text"
          id="familyMember"
          name="familyMember"
          value={inputs.familyMember}
          onChange={handleChange}
          style={inputStyle}
          placeholder="e.g., Dad"
        />
      </div>

      <button type="submit" style={buttonStyle} disabled={!valid}>
        Create Story!
      </button>
    </form>
  );
};

export default MadLibForm; 