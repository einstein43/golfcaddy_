import styles from "../styles/footer.module.css";
import utilStyles from "../styles/utils.module.css";
import classNames from "classNames";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={classNames(styles.footer_bottom)}>
        <div className={classNames(styles.footerdiv)}>
          <div className={classNames(styles.privacy)}>
            <a href="https://localhost/privacy">Privacy Statement</a>
            <p>
              Individueel project Alexander van Heteren <br />
            </p>
            <p>DBS002 2022</p>
          </div>
          <ul id={styles.ul_footer} className={classNames(styles.ul_footer)}>
            <li className={classNames(styles.footer_1, styles.footer)}>
              <a href="https://whatsapp.com">
                <img className={styles.socials} src="/images/whatsapp.png" />
              </a>
            </li>
            <li className={classNames(styles.footer_2, styles.footer)}>
              <a href="https://facebook.com">
                <img className={styles.socials} src="/images/facebook.png" />
              </a>
            </li>
            <li className={classNames(styles.footer_3, styles.footer)}>
              <a href="https://twitter.com">
                <img className={styles.socials} src="/images/twitter.png" />
              </a>
            </li>
            <li className={classNames(styles.footer_4, styles.footer)}>
              <a href="https://instagram.com">
                <img className={styles.socials} src="/images/instagram.png" />
              </a>
            </li>
          </ul>
          <div className={classNames(styles.footer_end)}>
            <p>Right side of the footer</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
