import express, { Request, Response } from "express";
import Player from "../models/player.model";
import { PlayerController } from "../controllers/player.controller";

export interface IPlayerService {
  getPlayer(id: number): Promise<Player>;
}

export interface IPlayerController {
  getPlayer(req: Request, res: Response): Promise<void> ;
}

export interface IPlayerRepository {
  getPlayer(id: number): Promise<Player>;
}
