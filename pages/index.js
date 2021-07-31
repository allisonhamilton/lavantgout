import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>L'avant goût</title>
        <meta
          name="description"
          content="L'avant goût une épicerie locaux à Montréal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/lavantgout.png" layout="fill" />
        <h1 className={styles.title}>L'avant goût épicerie</h1>

        <Image src="/public/images/lavantgout1.png" width={300} height={200} />
        <Image src="/public/images/lavantgout2.svg" width={300} height={200} />
      </main>
    </div>
  );
}
