import Image from "next/image";
import styles from "./page.module.css";
import Auth from "./components/Auth";

export default function Home() {
  return (
    <main className={styles.main}>
      <Auth />
    </main>
  );
}
