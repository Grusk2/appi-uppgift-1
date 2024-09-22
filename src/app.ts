import express from 'express';
/* I den här filen ska du skriva din serverapplikation! */

// Döp om till något som passar ditt API.
export interface Entity {
  id: string | number;
  // Lägg till önskade egenskaper (minst 3)
}

export const app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", { text: "World" })
})

// Egen router som håller koll på users
const userRouter = require("../routes/users")
//lägg till fler efter behov

// Simplifierar namngivning
app.use("/users", userRouter)
//lägg till fler efter behov
