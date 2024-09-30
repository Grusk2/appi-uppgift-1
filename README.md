# Video-Games REST-API

## Beskrivning

Detta projekt är ett enkelt REST-API byggt med NodeJS, Express och TypeScript. API:et hanterar CRUD-operationer (Create, Read, Update, Delete) för spelresurser, där varje spel har egenskaper som `id`, `title`, `developer`, `releaseYear`, och `genre`. All data är sparad lokalt i en array i serverfilen.

## Kom igång

1. Kör `npm install` för att installera beroenden.
2. Starta utvecklingsservern med `npm run dev`.
3. Testa API:et med en REST-klient eller manuellt via terminalen.

## Funktionalitet

- **GET /games** – Hämta alla spel
- **GET /games/:id** – Hämta ett specifikt spel
- **POST /games** – Lägg till ett nytt spel
- **PUT /games/:id** – Uppdatera ett spel
- **DELETE /games/:id** – Ta bort ett spel

## Krav för godkänt

- [x] CRUD endpoints (GET, POST, PUT, DELETE)
- [x] Data sparas lokalt i serverfilen
- [x] API:et svarar med 404 om datan saknas
- [x] Git & GitHub har använts
- [x] README-fil finns
