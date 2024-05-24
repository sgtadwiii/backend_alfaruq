const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { PrismaClient } = require("@prisma/client");

dotenv.config();

const prisma = new PrismaClient();
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Hai dunia");
});

app.get("/user", async (req, res) => {
  const user = await prisma.users.findMany();

  res.send(user);
});

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
