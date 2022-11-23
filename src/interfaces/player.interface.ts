import express, { Request, Response } from "express";
import Player from "../models/player.model";
import { PlayerController } from "../controllers/player.controller";

export interface IPlayerService {
  getPlayerById(id: number): Promise<Player>;
  getAllPlayers(): Promise<Player[]>;
  addPlayersToCard(): Promise<Player[]>;
}

export interface IPlayerController {
  getPlayerById(req: Request, res: Response): Promise<void>;
  getAllPlayers(req: Request, res: Response): Promise<void>;
  addPlayersToCard(req: Request, res: Response): Promise<void>;
}

export interface IPlayerRepository {
  getPlayerById(id: number): Promise<Player>;
  getAllPlayers(): Promise<Player[]>;
  addPlayersToCard(): Promise<Player[]>;
}
