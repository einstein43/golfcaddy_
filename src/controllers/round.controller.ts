import express, { Request, Response } from "express";
import { stringify } from "querystring";
import { container, inject, injectable } from "tsyringe";
import { IRoundController } from "../interfaces/round.interface";
import { RoundService } from "../services/round.service";

// const roundService = new RoundService();

container.register("IRoundService", {
  useClass: RoundService,
});

@injectable()
export class RoundControler implements IRoundController {
  constructor(@inject("IRoundService") private roundService: RoundService) {
    this.getRoundById = this.getRoundById.bind(this);
    this.addPlayerToRound = this.addPlayerToRound.bind(this);
  }

  public async getRoundById(req: Request, res: Response) {
    const roundId = JSON.stringify(req);
    const round = await this.roundService.getRoundById(1);
    res.status(200).send(round);
  }

  public async addPlayerToRound(req: Request, res: Response): Promise<void> {
    
    const name = req.body.name
    
    await this.roundService.addPlayerToRound(name);
    res.status(200).send();
  }
}
