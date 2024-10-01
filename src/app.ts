import express, { Request, Response } from 'express';

export interface Game {
    id: number;
    title: string;
    developer: string;
    releaseYear: number;
    genre: string;
}

// Example game data
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

export const app = express();
app.use(express.json());

// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Game API!' });
});

// GET all games
app.get('/games', (req: Request, res: Response) => {
    res.json(games);
});

// GET a game by ID
app.get('/games/:id', (req: Request, res: Response) => {
    const game = games.find(g => g.id === +req.params.id);
    game ? res.json(game) : res.status(404).json({ error: 'Game not found' });
});

// Validate game input
const validateGame = (game: Partial<Game>) => {
    const errors: string[] = [];
    if (!game.title) errors.push('Title is required');
    if (!game.developer) errors.push('Developer is required');
    if (!game.releaseYear) errors.push('Release Year is required');
    if (!game.genre) errors.push('Genre is required');
    return errors;
};

// POST a new game
app.post('/games', (req: Request, res: Response) => {
    const errors = validateGame(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const newGame: Game = {
        id: games.length ? Math.max(...games.map(g => g.id)) + 1 : 1,
        ...req.body
    };
    games.push(newGame);
    res.status(201).json(newGame);
});

// PUT to update a game by ID
app.put('/games/:id', (req: Request, res: Response) => {
    const gameIndex = games.findIndex(g => g.id === +req.params.id);
    if (gameIndex === -1) return res.status(404).json({ error: 'Game not found' });

    const errors = validateGame(req.body);
    if (errors.length) return res.status(400).json({ errors });

    games[gameIndex] = { ...games[gameIndex], ...req.body };
    res.json(games[gameIndex]);
});

// DELETE a game by ID
app.delete('/games/:id', (req: Request, res: Response) => {
    const gameIndex = games.findIndex(g => g.id === +req.params.id);
    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
        return res.status(204).send();
    }
    res.status(404).json({ error: 'Game not found' });
});

export default app;
