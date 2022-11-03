import Link from "next/link";
import styles from "../styles/leaderboards.module.css";
import classNames from "classNames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { json } from "stream/consumers";
import Player from "./player";
import { url } from "inspector";
import { setEnvironmentData } from "worker_threads";

function Leaderboards() {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3001/player');
      if(!response.ok) {
        throw new Error(
          'This is an HTTP error: the status is ${error}'
        );
      }
      let actualData = await response.json();
      setPlayer(actualData);
      setError(null);

    } catch(err) {
      setError(null);
      setPlayer([]);
    } finally {
      setLoading(false);
    }
  }
  getData()
  
}, [])
console.log(player)

 
  return (
    <div className={styles.wrapper_div}>
      <h1>FETCHING TEST</h1>
      {loading && <div>A moment please</div>}
      {error && <div>{"There is a problem with the post data - ${error}"}</div>}

      

      <div className={styles.leaderboard_card}>
        <div id={styles.card_name} className={styles.card_head}>
          Name
        </div>
        <div id={styles.card_name_num} className={styles.card_num}></div>

        <div id={styles.card_rank} className={styles.card_head}>
          Rank
        </div>
        <div id={styles.card_rank_num} className={styles.card_num}>
          rank#
        </div>

        <div id={styles.card_handicap} className={styles.card_head}>
          Handicap
        </div>
        <div id={styles.card_handicap_num} className={styles.card_num}>
          handicap#
        </div>

        <div id={styles.card_score} className={styles.card_head}>
          Last Score
        </div>
        <div id={styles.card_score_num} className={styles.card_num}>
          lastscore#
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
