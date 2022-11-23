import IPlayer from "../models/player.model";
import Player from "../models/player.model";
import { IPlayerRepository } from "../interfaces/player.interface";
import { query, Request } from "express";

export default class PlayerRepository implements IPlayerRepository {
  constructor() {}

  public async getPlayerById(id: number): Promise<Player> {
    console.log(`Request made for: player ${id}`);
    const mysql = require("mysql");
    //mysql connection pool
    var connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "adminadmin123",
      database: "golfcaddy",
      ssl: false,
    });

    connection.connect();

    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM players WHERE id = ?",
        id,
        (err: string, res: Player) => {
          if (err) reject(err);
          else resolve(res);
          //  const dto : PlayerDto = {
          //    id: res.id,
          //   name: res.name,
          //   rank: res.rank,
          //   handicap: res.handicap
          //  }
        }
      );
    });
  }

  public async getAllPlayers(): Promise<Player[]> {
    console.log("Request made for: all players");
    const mysql = require("mysql");

    var connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "adminadmin123",
      database: "golfcaddy",
      ssl: false,
    });

    connection.connect();
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM players ",

        (err: string, res: Player[]) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }

  public async addPlayersToCard(): Promise<Player[]> {
    
  
    console.log(`Request made to add players to card`);
    const mysql = require("mysql");
    var connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "adminadmin123",
      database: "golfcaddy",
      ssl: false,
    });
    connection.connect();

    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT player1, player2, player3, player4 FROM golfcaddy.active_round WHERE idactive_round_id = 1",

        (err: string, res: Player[]) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }
}
