import type { MadLibInputs } from '../types/MadLibInputs';

export const templates = [
  (inputs: MadLibInputs) => `
    ${inputs.boonie.exclamation}! My ${inputs.boonie.adjective1} Boonie is the best at ${inputs.boonie.verb1}ing.
    They can ${inputs.boonie.adverb1} ${inputs.boonie.verb2} any ${inputs.boonie.noun1} into a ${inputs.boonie.adjective2} ${inputs.boonie.noun2}!
  `,
  (inputs: MadLibInputs) => `
    Dear Mama, you are so ${inputs.mama.adjective1} when you ${inputs.mama.verb1}.
    I love watching you ${inputs.mama.adverb1} ${inputs.mama.verb2} with your ${inputs.mama.adjective2} ${inputs.mama.noun1}.
    ${inputs.mama.exclamation}! You make the best ${inputs.mama.noun2} in the world!
  `,
  (inputs: MadLibInputs) => `
    I am a ${inputs.nolan.adjective1} superhero who can ${inputs.nolan.adverb1} ${inputs.nolan.verb1}
    through ${inputs.nolan.noun1}s while carrying a ${inputs.nolan.adjective2} ${inputs.nolan.noun2}. 
    ${inputs.nolan.exclamation}! They even ${inputs.nolan.adverb2} ${inputs.nolan.verb2} in their sleep!
  `,
  (inputs: MadLibInputs) => `
    ${inputs.dada.exclamation}! You won't believe what my Dada did!
    They ${inputs.dada.adverb1} ${inputs.dada.verb1}ed a ${inputs.dada.adjective1} ${inputs.dada.noun1} and
    ${inputs.dada.adverb2} ${inputs.dada.verb2}ed it into a ${inputs.dada.adjective2} ${inputs.dada.noun2}!
  `,
] as const; 