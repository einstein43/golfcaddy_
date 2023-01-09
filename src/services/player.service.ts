import Player from "../models/player.model";
import { IPlayerService } from "../interfaces/player.interface";
import PlayerRepository from "../repositories/playerRepository";
import { IPlayerRepository } from "../interfaces/player.interface";
import { container, inject, injectable } from "tsyringe";
import { Request } from "express";

container.register("IPlayerRepository", {
  useClass: PlayerRepository,
});


@injectable()
export class PlayerService implements IPlayerService {
  constructor(
    @inject("IPlayerRepository") private playerRepository: IPlayerRepository
  ) {
    this.getPlayerById = this.getPlayerById.bind(this);
    this.getAllPlayers = this.getAllPlayers.bind(this);
  }


  public async getPlayerById(id: number) {
    const player: Player = await this.playerRepository.getPlayerById(id);

    // const playerToReturn: Player = {
    //   id: player.id
    // }
    return player;
  }

  public async getAllPlayers() {
    const player: Player[] = await this.playerRepository.getAllPlayers();
    return player;
  }

  public async addPlayersToCard(id: string) {
    const players: Player[] = await this.playerRepository.addPlayersToCard(id);
    return players;
  }
  
}
