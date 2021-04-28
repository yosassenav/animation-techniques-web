import Head from "next/head";
import { Card } from "@/components/card";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <h1 className={"gradient-border"} id="box">
          Welcome to Animation Techniques Web!!
        </h1>

        <Description
          description={"Ready to learn about animation techniques?"}
        />

        <div className={"grid"}>
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
