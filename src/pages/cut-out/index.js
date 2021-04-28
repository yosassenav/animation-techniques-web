import Head from "next/head";
import { Footer } from "@/components/footer";

export default function Animations() {
  return (
    <div className={"container"}>
      <Head>
        <title>Cut-Out Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <h1 className={"gradient-border"} id="box2">
          Cut-Out Animation
        </h1>
      </main>

      <Footer />
    </div>
  );
}
