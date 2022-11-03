import IPlayer from "../models/player.model";
import Player from "../models/player.model";
import { IPlayerRepository } from "../interfaces/player.interface";

export default class PlayerRepository implements IPlayerRepository {
  constructor() {}

  public async getPlayer(id: number): Promise<Player> {
    const player: Player = {
      id: 1,
      name: "Alex",
      rank: 1,
      handicap: 15,
    };

    return player;
  }
}
