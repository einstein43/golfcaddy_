import { Head } from "next/document";
import classNames from "classNames";
import Dashboard from "../components/dashboard";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/players.module.css";
import ImageComponent from "../components/image";
import Video1 from "../components/video1";
import Player from "../components/player";

function Players() {
  return (
    <div className={classNames(styles.players_div)}>
      
      <div>
        <Player></Player>
      </div>
    </div>
  );
}

export default Players;
