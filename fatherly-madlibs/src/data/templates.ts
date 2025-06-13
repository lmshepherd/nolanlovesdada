import type { MadLibInputs } from '../types/MadLibInputs';

export const templates = {
  boonie: (inputs: MadLibInputs) => `
    Boonie's Adventure

    ${inputs.boonie.exclamation}! What a ${inputs.boonie.adjective1} day for a walk! Boonie the ${inputs.boonie.adjective2} dog was so excited to see Nolan in his stroller. As they ${inputs.boonie.verb1}ed down the street, Boonie spotted a ${inputs.boonie.noun1} in the neighbor's yard. "Woof!" he barked ${inputs.boonie.adverb}, making Nolan giggle. 

    They ${inputs.boonie.verb2}ed past the park where Nolan loves to watch the ${inputs.boonie.noun2}s. Boonie wagged his tail happily, happy to be on their daily family walk. What a perfect day for adventures with Nolan and the whole family!
  `,

  mama: (inputs: MadLibInputs) => `
    Bath Time Fun

    "Splash! Splash! Splash!" Mama said as she filled the tub with ${inputs.mama.adjective1} water. Nolan's ${inputs.mama.adjective2} blocks and cups were ready for some ${inputs.mama.verb1}ing fun. 

    "Look at you ${inputs.mama.verb2}ing ${inputs.mama.adverb}!" Mama laughed as Nolan played with his favorite ${inputs.mama.noun1}. The bathroom was filled with giggles as they read "The Going to Bed Book" together, with Nolan's favorite ${inputs.mama.noun2} floating in the bubbles.

    ${inputs.mama.exclamation}! What a wonderful bath time with Mama!
  `,

  nolan: (inputs: MadLibInputs) => `
    A Day at Daycare

    ${inputs.nolan.exclamation}! Today at daycare was so ${inputs.nolan.adjective1}! I ${inputs.nolan.verb1}ed ${inputs.nolan.adverb} with my friends, playing with all the ${inputs.nolan.adjective2} toys. 

    We had a ${inputs.nolan.noun1} for snack time - I love my tofu and spinach! After that, we ${inputs.nolan.verb2}ed in the play area, building towers with blocks and stacking cups. My favorite part was when we played with the ${inputs.nolan.noun2}s in the sensory table.

    The teachers said I was such a good helper today, especially when I helped clean up the toys. I can't wait to tell Mama and Dada all about my fun day when they pick me up!
  `,

  dada: (inputs: MadLibInputs) => `
    Sports Day

    ${inputs.dada.exclamation}! What an exciting day at the ballpark! Dada was playing ${inputs.dada.adjective1} baseball, and I ${inputs.dada.verb1}ed ${inputs.dada.adverb} in my stroller, watching every moment of the ${inputs.dada.adjective2} game. 

    The crowd cheered as Dada stepped up to bat. I ${inputs.dada.verb2}ed with excitement, waving my little hands in the air. When Dada hit a ${inputs.dada.noun1}, everyone went wild! I clapped my hands and smiled at all the ${inputs.dada.noun2}s around us.

    After the game, Dada came over to give me a big hug. "Did you have fun watching the game?" he asked. I babbled happily, telling him all about my favorite parts of our special day at the ballpark together!
  `,
}; 