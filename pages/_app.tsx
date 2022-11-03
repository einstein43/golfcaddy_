import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Home from ".";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout home>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
