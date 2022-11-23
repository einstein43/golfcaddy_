import express, { request, Request, Response } from "express";
import Round from "../models/round.model";


export interface IRoundService {
    getRoundById(id: number): Promise<Round>
    addPlayerToRound(playerName: string): Promise<void>;
}

export interface IRoundController {
    getRoundById(req: Request, res: Response): Promise<void>;
    addPlayerToRound(req: Request, res: Response): Promise<void>;
}

export interface IRoundRepository {
    getRoundById(id:number): Promise<Round>;
    addPlayerToRound(playerName: string): Promise<void>;
}