import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.header_link} href="/kanto">
          관동지방
        </Link>
        <Link className={styles.header_link} href="/johto">
          성도지방
        </Link>
        <Link className={styles.header_link} href="/hoenn">
          호연지방
        </Link>
        <Link className={styles.header_link} href="/sinnoh">
          신오지방
        </Link>
        <Link className={styles.header_link} href="/unova">
          하나지방
        </Link>
        <Link className={styles.header_link} href="/kalos">
          칼로스지방
        </Link>
        <Link className={styles.header_link} href="/alola">
          알로라지방
        </Link>
        <Link className={styles.header_link} href="/galar">
          가라르지방
        </Link>
        <Link className={styles.header_link} href="/paldea">
          팔데아지방
        </Link>
        <Link className={styles.header_link} href="/">
          전부
        </Link>
      </header>
    </div>
  );
}
