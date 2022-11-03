import Link from "next/link";
import ReactPlayer from "react-player";
import styles from "../styles/video1.module.css";

function Video1() {
  return (
    <div>
      <video
        className={styles.video1}
        src="/arccos_video_1.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div>
        <h1 className={styles.videoheader}>GOLFCADDY</h1>
        <a className={styles.videobutton} href="http://localhost:3000/players">GET STARTED</a>
        </div>

        <p className={styles.videoparagraph}>
            PLAY LIKE THE PRO'S
        </p>
    </div>
  );
}

export default Video1;
