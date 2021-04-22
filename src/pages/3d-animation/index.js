import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/footer";

export default function Animations() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>3D Animation</h1>
      </main>

      <Footer />
    </div>
  );
}
