import styles from "../styles/leaderboards.module.css";
import classNames from "classNames";
import { useState, useEffect } from "react";
import Player from "../components/interfaces/player.interface";
import Players from "../pages/players";

function Leaderboards() {
  const [players, setPlayers] = useState<Player[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  //methode om speler data op te halen van de API

  //NOG TE DOEN: zorgen dat de parameter in de route komt en dat je zo verschillende spelers op kan halen
  const getAllData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/players`);
      if (!response.ok) {
        throw new Error("This is an HTTP error: the status is ${error}");
      }

      const data = await response.json();
      const sorted = sortedPlayers(data);

      setPlayers(sorted);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Insertion sort algoritme
  function sortedPlayers(players: Player[]) {
    // Lengte van players array
    let n = players.length;

    for (let i = 1; i < n; i++) {
      // huidige player
      let currentPlayer = players[i];

      // Laatste element van sorted array
      let j = i - 1;

      while (j > -1 && currentPlayer.rank < players[j].rank) {
        players[j + 1] = players[j];
        j--;
      }
      players[j + 1] = currentPlayer;
    }

    console.log(players);
    // Return sorted array
    return players;
  }

  return (
    <>
      <div>
        <table id={styles.table}>
          <thead id={styles.table_head}>
            <tr id={classNames(styles.table_row)}>
              <th id={styles.table_head_color}>Name</th>
              <th id={styles.table_head_color}>Rank</th>
              <th id={styles.table_head_color}>Handicap</th>
            </tr>
          </thead>

          <tbody id={styles.table_body}>
            {players &&
              players.map((player, index) => {
                return (
                  <tr key={index} className={classNames(styles.table_head)}>
                    <td className={classNames(styles.table_head)}>
                      {player.name}
                    </td>
                    <td className={classNames(styles.table_head)}>
                      {player.rank}
                    </td>
                    <td className={classNames(styles.table_head)}>
                      {player.handicap}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboards;
