import Link from "next/link";
import styles from "../styles/player.module.css";
import classNames from "classNames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";
import React from "react";

function Player() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [players, setPlayers] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const filteredPlayers = useMemo(
    () =>
      players.filter((player) => {
        return player.toLowerCase().includes(query.toLowerCase());
      }),
    [players, query]
  );

  

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef.current != null) {
      const value = inputRef.current.value;

      if (value === "") return;
      setPlayers((prev) => {
        return [...prev, value];
      });
      inputRef.current.value = "";
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
          {filteredPlayers.map((player) => (
            <div className={classNames(styles.filtered_div)}>
              <img
                className={classNames(styles.player_image)}
                src="/images/userimage.png"
                alt="player image"
              />
              <div className={styles.playername_div}>{player}</div>
              <div className={styles.player_metrics}>
                Handicap: <br />
                Rank: <br />
                Last Score:
              </div>
              <div className={styles.player_scores}>
                12 <br />
                1 <br />
                72
              </div>
              <button className={styles.player_button}>Add {player} to round</button>
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
