import "reflect-metadata";
import express, { Request, Response } from "express";
import { PlayerController } from "./controllers/player.controller";
import { container } from "tsyringe";
import { RoundControler } from "./controllers/round.controller";
import { ScoreController } from "./controllers/score.controller";
import { PlayerService } from "./services/player.service";
import PlayerRepository from "./repositories/playerRepository";
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// const playerController = new PlayerController(new PlayerService(new PlayerRepository()));
const playerController = container.resolve(PlayerController);
const roundController = container.resolve(RoundControler);
const scoreController = container.resolve(ScoreController);

// Route


app.get("/player", (req: Request, res: Response) => {
  playerController.getPlayerById(req, res);
});

app.get("/players", (req: Request, res: Response) => {
  playerController.getAllPlayers(req, res);
});

app.get("/rounds", (req: Request, res: Response) => {
  roundController.getRoundById(req, res);
});

app.post("/activeround", async (req: Request, res: Response) => {
  return await roundController.addPlayerToRound(req, res);
});
app.get("/activeplayer", async (req: Request, res: Response) => {
  return await playerController.addPlayersToCard(req, res);
});

app.post("/setscore", async (req: Request, res: Response) => {
  return await scoreController.setScoreForPlayer(req, res);
});

app.listen(3001, () => console.log("app listening on port 3001"));
