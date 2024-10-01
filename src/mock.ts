/*
 * Hej student! I den här filen beskriver du för testerna hur ditt API ser ut.
 * Tänk på att inte ändra variabelnamnen nedan utan bara det som tilldelas.
 */

import  { Game }  from './app';

// Sökvägen till resursen i ditt API:
export const pathToResource = '/games';

// Beskriv hur en entitet kan se ut:
export const mockedEntityDefault: Game = {
  id: 1,
  title: 'The Legend of Zelda',
  developer: 'Nintendo',
  releaseYear: 1986,
  genre: 'Adventure'
};

// Ge ett annat exempel på hur en entitet kan se ut:
export const mockedEntityUpdated: Game = {
  id: 2,
  title: 'Super Mario Bros',
  developer: 'Nintendo',
  releaseYear: 1985,
  genre: 'Platform'
};
