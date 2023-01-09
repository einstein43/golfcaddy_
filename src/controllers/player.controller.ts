import express, { Request, Response } from "express";
import { PlayerService } from "../services/player.service";
import {
  IPlayerController,
  IPlayerService,
} from "../interfaces/player.interface";
import { container, inject, injectable } from "tsyringe";
import { parseArgs } from "util";
import { inspect } from "util";

// const playerService = new PlayerService();

container.register("IPlayerService", {
  useClass: PlayerService,
});

@injectable()
export class PlayerController implements IPlayerController {
  constructor(@inject("IPlayerService") private playerService: IPlayerService) {
    this.getPlayerById = this.getPlayerById.bind(this);
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.addPlayersToCard = this.addPlayersToCard.bind(this);
  }

  public async getPlayerById(req: Request, res: Response) {
    var util = require("util");
    const pid = util.inspect(req.query);
    const player = await this.playerService.getPlayerById(pid[7]);
    res.status(200).send(player);
  }

  public async getAllPlayers(req: Request, res: Response) {
 
    const player = await this.playerService.getAllPlayers();
    res.status(200).send(player);
  }

  public async addPlayersToCard(req: Request, res: Response) {
    var util = require("util");
    const pid = util.inspect(req.query);
    
    const players = await this.playerService.addPlayersToCard(pid[7]);
    res.status(200).send(players);
  }
}
