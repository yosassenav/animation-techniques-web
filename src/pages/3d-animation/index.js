import Head from "next/head";
import { Image } from "@/components/img";
import { Footer } from "@/components/footer";

export default function Animations() {
  return (
    <div className={"container"}>
      <Head>
        <title>3D Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <h1 className={"gradient-border"} id="box2">
          3D Animation
        </h1>
        <Image src="/toy-story.jpg" alt="Toy Story" width="700" height="300" />
      </main>

      <Footer />
    </div>
  );
}
