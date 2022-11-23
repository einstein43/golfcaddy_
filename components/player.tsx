import Link from "next/link";
import styles from "../styles/player.module.css";
import classNames from "classNames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import React from "react";
import Round from "../components/interfaces/round.interface";

function Player() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [players, setPlayers] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const [playerData, setPlayerData] = useState<string>("");
  const [round, setRound] = useState<Round>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   getRound();
  // }, []);

  //methode om de correcte gegevens bij de spelers te krijgen op de playercards
  const getPlayerData = () => {
    if (playerData.toString() == round?.player.name) {
      const playerScore: number = round.score;
      return playerScore;
    }
  };

  const addPlayerToRound = async (playerName: string) => {
    console.log(playerName);
    try {
      const response = await fetch("http://localhost:3001/activeround", {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: playerName}),
      });
      
      if (!response.ok) {
        throw new Error(`This is an HTTP error: the status is ${error}`);
      }
    } catch (err: any) {
      console.log("ERROR PIK");
    }
  };

  //functie om de ronde op te halen die bij de player hoort
  const getRound = async () => {
    try {
      const response = await fetch("http://localhost:3001/rounds");
      if (!response.ok) {
        throw new Error("This is an HTTP error: the status is ${error}");
      }
      let actualData = await response.json();
      setRound(actualData);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //methode om de spelers in de lijst te filteren
  const filteredPlayers = useMemo(
    () =>
      players.filter((player) => {
        return player.toLowerCase().includes(query.toLowerCase());
      }),
    [players, query]
  );

  //methode die players toevoegt
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef.current != null) {
      const value = inputRef.current.value;
      // setPlayerData(inputRef.toString())
      if (value === "") return;
      setPlayers((prev) => {
        return [...prev, value];
      });

      inputRef.current.value = "";
      // getRound();
    }
  }

  return (
    <div className={classNames(styles.wrapper_div)}>
      <div className={classNames(styles.select_player)}>
        Filter Players: <span></span>
        <input
          className={classNames(styles.searchplayer_input)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="Search"
        />
        <br />
        <br />
        <div className={classNames(styles.player_list)}>
          <h3 className={styles.selectplayer_h3}>
            Select a player to add to your round:
          </h3>
          {filteredPlayers.map((player, index) => (
            <div key={index} className={classNames(styles.filtered_div)}>
              <img
                className={classNames(styles.player_image)}
                src="/images/userimage.png"
                alt="player image"
              />
              <div className={styles.playername_div}>{player}</div>
              <div className={styles.player_metrics}>
                Handicap: {round && round.player.handicap} <br />
                Rounds:{round && round.playtime} <br />
                Last Score: {round && round.score}
              </div>
              <div className={styles.player_scores}></div>
              <button
                onClick={() => addPlayerToRound(player)}
                className={styles.player_button}
              >
                Add {player} to round
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={classNames(styles.login_box)}>
        <h2>Add a Player</h2>
        <form onSubmit={onSubmit}>
          <div className={classNames(styles.user_box)}>
            <input ref={inputRef} type="text"></input>
            <label>Player Name</label>
          </div>
          <button className={classNames(styles.newplayer_button)} type="submit">
            <a href="#">ADD</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Player;
