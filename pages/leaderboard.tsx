import { Head } from "next/document";

import Dashboard from "../components/dashboard";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/about.module.css"
import ImageComponent from "../components/image";
import Leaderboards from "../components/leaderboards";

function Leaderboard () {
    return (
        <Leaderboards></Leaderboards>
      )
}

export default Leaderboard;