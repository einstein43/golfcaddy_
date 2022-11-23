import "reflect-metadata";
import express, { Request, Response } from "express";
import { PlayerController } from "./controllers/player.controller";
import { container } from "tsyringe";
import { RoundControler } from "./controllers/round.controller";
var cors = require('cors');


import { PlayerService } from "./services/player.service";
import PlayerRepository from "./repositories/playerRepository";

const app = express();

app.use(express.json());
app.use(cors());

// const playerController = new PlayerController(new PlayerService(new PlayerRepository()));
const playerController = container.resolve(PlayerController);
const roundController = container.resolve(RoundControler);

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
//godverdomme verplaatsen deze handel
app.post("/activeround", async (req: Request, res: Response) => {
  
  
   return await roundController.addPlayerToRound(req, res);
});
app.get("/activeplayer", async (req: Request, res: Response) => {
  
  
   return await playerController.addPlayersToCard(req, res);
});



app.listen(3001, () => console.log("app listening on port 3001"));
