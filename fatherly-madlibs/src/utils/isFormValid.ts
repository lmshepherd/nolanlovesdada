import type { MadLibInputs } from '../types/MadLibInputs';

export const isFormValid = (inputs: MadLibInputs): boolean => {
  return Object.values(inputs).every((section) =>
    Object.values(section).every((value) => (value as string).trim() !== '')
  );
}; 