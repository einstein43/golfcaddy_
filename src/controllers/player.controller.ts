import express, { Request, Response } from "express";
import { PlayerService } from "../services/player.service";
import { IPlayerController } from "../interfaces/player.interface";

const playerService = new PlayerService();

export class PlayerController implements IPlayerController {
  constructor() {}

  public async getPlayer(req: Request, res: Response) {
    const player = await playerService.getPlayer(1);
    res.status(200).send(player);
  }
}
