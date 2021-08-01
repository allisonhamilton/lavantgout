import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`L'avant goût`}</title>
        <meta
          name="description"
          content="L'avant goût une épicerie locaux à Point-St-Charles en Montréal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <header className="header-container">
          <h1 className="title">Ouverture Bientot | Opening Soon</h1>
          <p>Épicerie locaux à Point-St-Charles en Montréal</p>
        </header>
        <Image
          src="/images/lavantgout.png"
          className="background-image"
          layout="fill"
          priority={true}
        />
        <style jsx global>
          {`
            .header-container {
              width: 100%;
              height: 100px;
              color: white;
              background-color: #98a08e;
              text-align: center;
              z-index: 999;
              position: sticky;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-transform: uppercase;
              letter-spacing: 1.6px;
            }
            .title {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-weight: 300;
            }
            .background-image {
              z-index: -1;
          `}
        </style>
      </main>
    </div>
  );
}
