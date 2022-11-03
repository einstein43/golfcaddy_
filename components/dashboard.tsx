import Link from "next/link";
import styles from "../styles/dashboard.module.css"

const Dashboard = () => (
  <ul>
    <li className={styles.dashboard_button}>
      <Link href="https://localhost:3000/home">HOME</Link>
    </li>
  </ul>
);
export default Dashboard;
