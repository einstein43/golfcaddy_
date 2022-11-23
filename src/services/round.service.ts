import { IRoundRepository, IRoundService } from "../interfaces/round.interface";
import Player from "../models/player.model";
import RoundRepository from "../repositories/round.repository";
import Round from "../models/round.model";
import { container, inject, injectable } from "tsyringe";

container.register("IRoundRepository", {
  useClass: RoundRepository,
});

@injectable()
export class RoundService implements IRoundService {
  constructor(
    @inject("IRoundRepository") private roundRepository: IRoundRepository
  ) {
    this.getRoundById = this.getRoundById.bind(this);
  }

  public async getRoundById(id: number): Promise<Round> {
    const round: Round = await this.roundRepository.getRoundById(id);

    return round;
  }

  public async addPlayerToRound(playerName: string): Promise<void> {
    await this.roundRepository.addPlayerToRound(playerName);
  }
}
