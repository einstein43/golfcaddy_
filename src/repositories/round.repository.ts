import { IRoundRepository } from "../interfaces/round.interface";
import Round from "../models/round.model";
import PlayerRepository, * as playerRepository from "../repositories/playerRepository";
import Player from "../models/player.model";
import { json } from "stream/consumers";

export default class RoundRepository implements IRoundRepository {
  constructor() {}

  public async getRoundById(id: number): Promise<Round> {
    const mysql = require("mysql");

    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "golfcaddy",
    });

    connection.connect();

    const round = connection.query(
      `SELECT round FROM golfcaddy.rounds WHERE id = ${id} `
    );

    connection.end();
    return round;
  }

  public async addPlayerToRound(playerName: string): Promise<void> {
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

    console.log(playerName + " is added to the active round");
    connection.query(
      `UPDATE golfcaddy.active_round SET player1 = '${playerName}' WHERE idactive_round_id = 1`
    );

    connection.end();
  }
}
