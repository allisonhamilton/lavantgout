import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`L'avant goût`}</title>
        <meta
          name="description"
          content="L'avant goût une épicerie locaux à Montréal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/images/lavantgout.png" layout="fill" />
        <h1>{`L'avant goût épicerie`}</h1>
      </main>
    </div>
  );
}
