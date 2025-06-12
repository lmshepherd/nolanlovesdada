import type { MadLibInputs } from '../types/MadLibInputs';

export const isFormValid = (inputs: MadLibInputs): boolean => {
  return Object.values(inputs).every((value) => value.trim() !== '');
}; 