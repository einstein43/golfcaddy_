import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/navbar";
import Video1 from "../components/video1";
import utilStyles from "../styles/utils.module.css";
import dynamic from "next/dynamic";
import styles from "../styles/index.module.css";
import Video2 from "../components/video2";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.headerdiv}>
      <Video1></Video1>
      <div className={styles.explore_div}>
        <Video2></Video2>
      </div>
      
    </div>
    
  );
}
