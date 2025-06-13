import type { MadLibInputs } from '../types/MadLibInputs';

export const templates = {
  boonie: (inputs: MadLibInputs) => `
    Boonie's Adventure

    ${inputs.boonie.exclamation}! What a ${inputs.boonie.adjective1} day for a walk! Boonie the ${inputs.boonie.adjective2} dog was so excited to see Nolan in his stroller. As they ${inputs.boonie.verb1}ed down the street, Boonie spotted a ${inputs.boonie.noun1} in the neighbor's yard. "Woof!" he barked ${inputs.boonie.adverb1}, making Nolan giggle. 

    They ${inputs.boonie.verb2}ed past the park where Nolan loves to watch the ${inputs.boonie.noun2}s. Boonie wagged his tail ${inputs.boonie.adverb2}, happy to be on their daily family walk. What a perfect day for adventures with Nolan and the whole family!
  `,

  mama: (inputs: MadLibInputs) => `
    Bath Time Fun

    "Splash! Splash! Splash!" Mama said as she filled the tub with ${inputs.mama.adjective1} water. Nolan's ${inputs.mama.adjective2} blocks and cups were ready for some ${inputs.mama.verb1}ing fun. 

    "Look at you ${inputs.mama.verb2}ing ${inputs.mama.adverb1}!" Mama laughed as Nolan played with his favorite ${inputs.mama.noun1}. The bathroom was filled with ${inputs.mama.adverb2} giggles as they read "The Going to Bed Book" together, with Nolan's favorite ${inputs.mama.noun2} floating in the bubbles.

    ${inputs.mama.exclamation}! What a wonderful bath time with Mama!
  `,

  nolan: (inputs: MadLibInputs) => `
    Garden of Lights

    ${inputs.nolan.exclamation}! The ${inputs.nolan.adjective1} botanic garden was so ${inputs.nolan.adjective2}! I ${inputs.nolan.verb1}ed ${inputs.nolan.adverb1} through the twinkling lights with my family. 

    My stuffed Bluey and Stitch ${inputs.nolan.verb2}ed ${inputs.nolan.adverb2} beside me as we looked at the beautiful ${inputs.nolan.noun1}s and ${inputs.nolan.noun2}s. The lights made everything look like magic!
  `,

  dada: (inputs: MadLibInputs) => `
    Sports Day

    ${inputs.dada.exclamation}! Dada was playing ${inputs.dada.adjective1} baseball! I ${inputs.dada.verb1}ed ${inputs.dada.adverb1} in my stroller, watching the ${inputs.dada.adjective2} game. 

    The ${inputs.dada.noun1} was so exciting, and I ${inputs.dada.verb2}ed ${inputs.dada.adverb2} when Dada hit the ${inputs.dada.noun2}! What a fun day at the ballpark with my family!
  `,
}; 