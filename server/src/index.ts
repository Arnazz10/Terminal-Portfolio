import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";

async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = await registerRoutes(app);
  const port = process.env.PORT ? Number(process.env.PORT) : 5174;
  server.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}

main();


