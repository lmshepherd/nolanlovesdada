import { describe, it, expect } from 'vitest';
import { isFormValid } from './isFormValid';
import type { MadLibInputs } from '../types/MadLibInputs';

describe('isFormValid', () => {
  const validInputs: MadLibInputs = {
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

  it('returns true when all inputs are filled', () => {
    expect(isFormValid(validInputs)).toBe(true);
  });

  it('returns false when any input is empty', () => {
    const invalidInputs = {
      ...validInputs,
      boonie: {
        ...validInputs.boonie,
        adjective1: '',
      },
    };
    expect(isFormValid(invalidInputs)).toBe(false);
  });

  it('returns false when any input is only whitespace', () => {
    const invalidInputs = {
      ...validInputs,
      mama: {
        ...validInputs.mama,
        verb1: '   ',
      },
    };
    expect(isFormValid(invalidInputs)).toBe(false);
  });

  it('returns false when any section is missing', () => {
    const invalidInputs = {
      boonie: validInputs.boonie,
      mama: validInputs.mama,
      nolan: validInputs.nolan,
      // dada section is missing
    } as MadLibInputs;
    expect(isFormValid(invalidInputs)).toBe(false);
  });

  it('returns false when any field in any section is missing', () => {
    const invalidInputs = {
      ...validInputs,
      nolan: {
        adjective1: 'fun',
        adjective2: 'colorful',
        noun1: 'blocks',
        noun2: 'cups',
        verb1: 'stack',
        verb2: 'build',
        adverb: '',
        exclamation: 'Wow',
      },
    };
    expect(isFormValid(invalidInputs)).toBe(false);
  });
}); 