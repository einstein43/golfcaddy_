import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import ImageComponent from "./image";
import Link from "next/link";
import React, { FC } from "react";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Video1 from "./video1";
import Footer from "./footer";
import classNames from "classNames";

const name = "Alexander";
export const siteTitle = "Golfcaddy";

interface Proptypes {
  children: React.ReactNode;
  home: React.ReactNode;
}

export default function Layout({ children, home }: Proptypes) {
  return (
    <>
      <div className={classNames(styles.wrapper_div)}>
        <Navbar />
        <main style={styles}>
          <section >{children}</section>
        </main>
        
      </div>
     
    </>
  );
}
