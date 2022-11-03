import Link from "next/link";
import ReactPlayer from "react-player";
import styles from "../styles/video1.module.css";
import classNames from "classNames";

function Video2() {
  return (
    <div className={styles.video2div}>
      <video
        className={styles.video2}
        src="/arccos_video_2.mp4"
        autoPlay
        muted
        loop
      ></video>
      <img className={styles.image_1} src="explore_1.png" />
      <p className={styles.p_explore}>
        Explore all the possibilities of our mobile app and start today!
      </p>
      <p className={classNames(styles.p_explore_1, styles.explore)}>includes all Dutch golf courses</p>
      <p className={classNames(styles.p_explore_2, styles.explore)}>Share your rounds with friends</p>
      <p className={classNames(styles.p_explore_3, styles.explore)}>Take your game to a new level</p>
      <p className={classNames(styles.p_explore_4, styles.explore)}>Get premium tips from our GolfCaddy AI</p>
    </div>
  );
}

export default Video2;
