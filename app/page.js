import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my app</h1>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
