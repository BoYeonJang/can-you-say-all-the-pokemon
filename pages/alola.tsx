import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Alola() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          알로라지방 포켓몬 <span className={styles.subtitle}>88마리</span> 말할 수 있을까?
        </h1>
      </main>
    </Layout>
  );
}
