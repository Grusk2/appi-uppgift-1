import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Game API!');
});

app.get('/games', (req: Request, res: Response) => {
    res.json(games);
});

app.get('/games/:id', (req: Request, res: Response) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (game) {
        res.json(game);
    } else {
        res.status(404).send('Spelet hittades inte');
    }
});

app.post('/games', (req: Request, res: Response) => {
    const newGame: Game = {
        id: games.length + 1,
        ...req.body
    };
    games.push(newGame);
    res.status(201).json(newGame);
});

app.put('/games/:id', (req: Request, res: Response) => {
    const gameIndex = games.findIndex(g => g.id === parseInt(req.params.id));
    if (gameIndex !== -1) {
        games[gameIndex] = { ...games[gameIndex], ...req.body };
        res.json(games[gameIndex]);
    } else {
        res.status(404).send('Spelet hittades inte');
    }
});

app.delete('/games/:id', (req: Request, res: Response) => {
    const gameIndex = games.findIndex(g => g.id === parseInt(req.params.id));
    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Spelet hittades inte');
    }
});

interface Game {
    id: number;
    title: string;
    developer: string;
    releaseYear: number;
    genre: string;
  }
  
  let games: Game[] = [
    { id: 1, title: "The Legend of Zelda", developer: "Nintendo", releaseYear: 1986, genre: "Adventure" },
    { id: 2, title: "Super Mario Bros", developer: "Nintendo", releaseYear: 1985, genre: "Platform" },
    { id: 3, title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", releaseYear: 2015, genre: "RPG" },
    { id: 4, title: "Minecraft", developer: "Mojang", releaseYear: 2011, genre: "Sandbox" },
    { id: 5, title: "God of War", developer: "Santa Monica Studio", releaseYear: 2018, genre: "Action" },
    { id: 6, title: "Red Dead Redemption 2", developer: "Rockstar Games", releaseYear: 2018, genre: "Action-Adventure" },
    { id: 7, title: "Fortnite", developer: "Epic Games", releaseYear: 2017, genre: "Battle Royale" },
    { id: 8, title: "Overwatch", developer: "Blizzard Entertainment", releaseYear: 2016, genre: "First-Person Shooter" },
    { id: 9, title: "Cyberpunk 2077", developer: "CD Projekt Red", releaseYear: 2020, genre: "RPG" },
    { id: 10, title: "Among Us", developer: "InnerSloth", releaseYear: 2018, genre: "Party" }
  ];
  

export default app; 