import type { MadLibInputs } from '../types/MadLibInputs';

export const templates = [
  (inputs: MadLibInputs) => `
    ${inputs.exclamation}! My ${inputs.adjective1} ${inputs.familyMember} is the best at ${inputs.verb1}ing.
    They can ${inputs.adverb1} ${inputs.verb2} any ${inputs.noun1} into a ${inputs.adjective2} ${inputs.noun2}!
  `,
  (inputs: MadLibInputs) => `
    Dear ${inputs.familyMember}, you are so ${inputs.adjective1} when you ${inputs.verb1}.
    I love watching you ${inputs.adverb1} ${inputs.verb2} with your ${inputs.adjective2} ${inputs.noun1}.
    ${inputs.exclamation}! You make the best ${inputs.noun2} in the world!
  `,
  (inputs: MadLibInputs) => `
    My ${inputs.familyMember} is a ${inputs.adjective1} superhero who can ${inputs.adverb1} ${inputs.verb1}
    through ${inputs.noun1}s while carrying a ${inputs.adjective2} ${inputs.noun2}. 
    ${inputs.exclamation}! They even ${inputs.adverb2} ${inputs.verb2} in their sleep!
  `,
  (inputs: MadLibInputs) => `
    Once upon a time, my ${inputs.adjective1} ${inputs.familyMember} decided to ${inputs.verb1} a ${inputs.noun1}.
    They ${inputs.adverb1} turned it into the most ${inputs.adjective2} ${inputs.noun2} ever!
    ${inputs.exclamation}! Then they ${inputs.adverb2} ${inputs.verb2}ed all day long.
  `,
  (inputs: MadLibInputs) => `
    ${inputs.exclamation}! You won't believe what my ${inputs.familyMember} did!
    They ${inputs.adverb1} ${inputs.verb1}ed a ${inputs.adjective1} ${inputs.noun1} and
    ${inputs.adverb2} ${inputs.verb2}ed it into a ${inputs.adjective2} ${inputs.noun2}!
  `,
] as const; 