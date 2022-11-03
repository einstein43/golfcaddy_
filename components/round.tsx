import Link from "next/link";
import styles from "../styles/round.module.css";
import classNames from "classNames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";
import React from "react";

function Round() {
  return (
    <>
      <div className={styles.wrapper_div}>
        <div className={styles.playercards_div}>
          <div className={styles.playercard_1}>
            <img
              className={styles.playercard_img}
              src="/images/userimage.png"
              alt=""
            />
            Playercard 1{" "}
          </div>
          <div className={styles.playercard_2}>
            <img
              className={styles.playercard_img}
              src="/images/userimage.png"
              alt=""
            />
            Playercard 2
          </div>
          <div className={styles.playercard_3}>
            <img
              className={styles.playercard_img}
              src="/images/userimage.png"
              alt=""
            />
            Playercard 3
          </div>
          <div className={styles.playercard_4}>
            <img
              className={styles.playercard_img}
              src="/images/userimage.png"
              alt=""
            />
            Playercard 4
          </div>

        </div>
        <div className={styles.roundsettings_div}>ROUND SETTINGS
        <form className={styles.form} action="">
            <input type="text" />
        </form>
        <form className={styles.form} action="">
            <input type="text" />
        </form>
        <form className={styles.form} action="">
            <input type="text" />
        </form>

        </div>
      </div>
    </>
  );
}

export default Round;
