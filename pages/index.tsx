import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>포켓몬 전부 말할 수 있을까? 게임</title>
        <meta name="description" content="포켓몬 전부 말할 수 있을까? 게임" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </Layout>
  );
}
