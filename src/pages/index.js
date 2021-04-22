import Head from "next/head";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import { Description } from "../components/description";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Animation Techniques Web!!</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Description
          description={"Ready to learn about animation techniques??"}
        />

        <div className={styles.grid}>
          <Card
            title={"2D Animation"}
            description={"I want to learn more about 2D Animation."}
            href={"./2d-animation"}
          />
          <Card
            title={"Stop Motion"}
            description={"I want to learn more about Stop Motion."}
            href={"./stop-motion"}
          />
          <Card
            title={"3D Animation"}
            description={"I want to learn more about 3D Animation."}
            href={"./3d-animation"}
          />
          <Card
            title={"Cut-Out Animation"}
            description={"I want to learn more about Cut-Out Animation."}
            href={"./cut-out"}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
