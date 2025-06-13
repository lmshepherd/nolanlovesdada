import { describe, it, expect } from 'vitest';
import { isFormValid } from './isFormValid';
import type { MadLibInputs } from '../types/MadLibInputs';

describe('isFormValid', () => {
  it('returns true when all inputs are filled', () => {
    const validInputs: MadLibInputs = {
      boonie: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      mama: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      nolan: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      dada: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
    };

    expect(isFormValid(validInputs)).toBe(true);
  });

  it('returns false when any input is empty', () => {
    const invalidInputs: MadLibInputs = {
      boonie: {
        adjective1: 'happy',
        adjective2: '',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      mama: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      nolan: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      dada: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
    };

    expect(isFormValid(invalidInputs)).toBe(false);
  });

  it('returns false when any input is only whitespace', () => {
    const invalidInputs: MadLibInputs = {
      boonie: {
        adjective1: 'happy',
        adjective2: '   ',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      mama: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      nolan: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
      dada: {
        adjective1: 'happy',
        adjective2: 'silly',
        noun1: 'dragon',
        noun2: 'castle',
        verb1: 'jump',
        verb2: 'dance',
        adverb1: 'quickly',
        adverb2: 'carefully',
        exclamation: 'Wow',
      },
    };

    expect(isFormValid(invalidInputs)).toBe(false);
  });
}); 