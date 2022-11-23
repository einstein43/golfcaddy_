import styles from "../styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import classNames from "classNames";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const homeLink = "localhost:3000/home";
const aboutLink = "/home";
const productsLink = "/home";

function Navbar() {
  React.useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
  });
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <ul id={styles.lijst_1} className={styles.unordered_list}>
            <li className={classNames(styles.lijst_1_li)}>
              <Link href="http://localhost:3000/players">PLAYERS</Link>
            </li>

            <li className={classNames(styles.lijst_1_li)}>
              <Link href="http://localhost:3000/rounds">ROUNDS</Link>
            </li>

            <li className={classNames(styles.lijst_1_li)}>
              <Link href="http://localhost:3000/leaderboard">LEADERBOARD</Link>
            </li>

            <li className={classNames(styles.lijst_1_li)}>
              <Link href="http://localhost:3000/score">SCORE</Link>
            </li>
          </ul>

          <ul className={styles.signup}>
            <li className={styles.unordered_list_su}>
              <Link href="http://localhost:3000/">SIGN UP</Link>
            </li>
          </ul>

          <h1 className={styles.logo}>GOLFCADDY</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
