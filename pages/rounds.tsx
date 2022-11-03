import { Head } from "next/document";

import Dashboard from "../components/dashboard";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/about.module.css";
import ImageComponent from "../components/image";
import Round from "../components/round";

function Rounds() {
  return (
    <>
      <div>
        <Round></Round>
      </div>
    </>
  );
}

export default Rounds;
