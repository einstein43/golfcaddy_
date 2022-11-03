import Player from '../models/player.model'
import {IPlayerService} from '../interfaces/player.interface'
import  PlayerRepository  from '../repositories/playerRepository'
import { IPlayerRepository } from '../interfaces/player.interface'


const playerRepository = new PlayerRepository()

export class PlayerService implements IPlayerService {
    constructor( ){}

    public async getPlayer(id:number){
        
        const player: Player = await playerRepository.getPlayer(1)

        return player
}
}
