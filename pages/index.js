import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`L'Avant Goût épicerie`}</title>
        <meta
          name="description"
          content="L'avant goût une épicerie locaux à Point-St-Charles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="logo-container">
          <Image
            src="/images/lavantgout2.svg"
            layout="intrinsic"
            alt="L'Avant Goût épicerie"
            priority={true}
            width={400}
            height={150}
          />
        </div>
        <div className="socialmedia-container">
          <Link href="https://m.facebook.com/lavantgoutepicerie/">
            <BsFacebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/lavantgoutepicerie/">
            <BsInstagram size={20} />
          </Link>
        </div>
        <div className="img-container">
          <Image
            src="/images/figtree.jpg"
            layout="fill"
            objectFit="cover"
            alt="L’Avant Gout Épicerie Fig Tree"
            className="img-wrapper"
          />
        </div>
        <section className="section">
          <h2 className="p-title">Bienvenue chez votre épicier de quartier!</h2>
          <div className="aboutus-container">
            <p className="francais">
              Situé à Pointe-St-Charles sur une de ses artères principales, la
              rue Centre, L’Avant Goût Épicerie est votre épicier de quartier.
              Ses tons terreux qui contrastent avec des couleurs vibrantes vous
              invitent à découvrir sa grande sélection de produits locaux et du
              terroir.
            </p>
            <p>
              Located in Pointe St-Charles on one of its main arteries, Centre
              Street, L’Avant Gout Épicerie is your go to neighborhood grocery.
              With its carefully curated contrast of earthy tones to vibrant
              colors, its décor invites you to discover its vast selection of
              local products from around the province.{" "}
            </p>{" "}
          </div>
          <div className="dots">
            <span>&#8226;</span>
            <span>&#8226;</span>
            <span>&#8226;</span>
          </div>
          <div className="aboutus-container">
            <p className="francais">
              Des produits frais, de la mer et des viandes du Québec, en passant
              par une variété de fromages, charcuteries et sans oublier les
              produits végétariens, végétaliens et sans gluten, L’Avant Goût
              vous offre tout pour votre prochain repas.
            </p>
            <p>
              From fresh produce to fish and seafood, meats, cheeses and cured
              meats, an array of vegetarian, vegan and gluten-free options, beer
              from Quebec microbreweries, Quebec’s finest wines and even items
              in bulk including local cleaning products.{" "}
            </p>
          </div>
          <div className="dots">
            <span>&#8226;</span>
            <span>&#8226;</span>
            <span>&#8226;</span>
          </div>
          <div className="aboutus-container">
            <p className="francais">
              On y retrouve notamment une grande variété de bières de
              microbrasseries et des vins du Québec méticuleusement choisis. De
              plus, vous pouvez retrouver des produits ménagers faits au Québec
              et une variété de produits en vrac. L’Avant Goût Épicerie est
              l’endroit idéal pour trouver tout ce dont vous avez besoin.
            </p>
            <p>
              L’Avant Gout is your one stop shop. Be sure to ask about the
              numerous specialty items only found at L’Avant Gout Épicerie!
            </p>
          </div>

          <div className="contactus-container">
            <div>
              <h3 className="contactus-title">
                Au plaisir de vous accueillir!
              </h3>
              <p className="contactus-text">
                2126 rue Centre, Pointe St Charles
                <br /> Montréal, Québec H3K 1J4
              </p>
              <p className="contactus-text">
                Ouvert du lundi au vendredi de 9h-20h
                <br /> le samedi et dimanche de 9h-18h
              </p>
              <p className="contactus-text">
                Open Monday to Friday 9am to 8pm
                <br /> Saturday to Sunday 9am to 6pm
              </p>
              <p className="contactus-text">514 927-4111</p>
            </div>
            <div className="contactus-img">
              <Image
                src="/images/lavantgout-proprios.webp"
                alt="Les proprios de l'avant goût épicerie"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className="img-wrapper"
              />
            </div>
          </div>
        </section>
        <div className="image-container">
          <Image
            src="/images/producewheel.jpg"
            layout="intrinsic"
            width={384}
            height={400}
            alt="L’Avant Gout Épicerie Produce Wheel"
            objectFit="cover"
            className="img-wrapper"
          />
          <Image
            src="/images/freshproduce-fruits.jpg"
            layout="intrinsic"
            width={384}
            height={400}
            alt="L’Avant Gout Épicerie Fresh Produce Aisle"
            objectFit="cover"
            className="img-wrapper"
          />
          <Image
            src="/images/freshproduce.jpg"
            layout="intrinsic"
            width={384}
            height={400}
            alt="L’Avant Gout Épicerie Fresh Produce Aisle"
            objectFit="cover"
            className="img-wrapper"
          />
          <Image
            src="/images/totebag.jpg"
            layout="intrinsic"
            width={384}
            height={384}
            alt="L’Avant Gout Épicerie Tote Bag"
            objectFit="cover"
            className="img-wrapper"
          />
        </div>
        <style jsx global>
          {`
            body {
              background-color: #f6ebd9;
              color: #41513a;
            }
            .main-container {
              max-width: 1200px;
              padding: 0 15px;
              margin: 0 auto;
            }
            .section {
              max-width: 800px;
              margin: 0 auto;
            }
            .logo-container {
              display: flex;
              justify-content: center;
              margin: 0;
              padding: 0;
            }
            .socialmedia-container {
              display: flex;
              justify-content: center;
              gap: 20px;
              margin-bottom: 20px;
              cursor: pointer;
            }
            .img-container {
              height: 400px;
              width: 100%;
              position: relative;
              margin: 0 auto 10px;
            }
            .img-wrapper {
              border-radius: 5px;
            }

            .contactus-container {
              border: 1px solid #41513a;
              border-radius: 5px;
              font-weight: 600;
              padding: 15px;
            }
            .contactus-img {
              position: relative;
              width: 100%;
              height: 350px;
            }
            .contactus-text {
              padding: 0 0 15px 0;
            }

            .francais {
              font-weight: 600;
              margin-bottom: 10px;
            }
            .aboutus-container {
              width: 100%;
              margin: 30px 0;
            }
            .dots {
              text-align: center;
            }
            .p-title {
              text-align: center;
              margin: 50px 0;
              font-family: "Rufina", serif;
              font-size: 2em;
            }
            .contactus-title {
              font-family: "Rufina", serif;
              font-size: 1.5em;
              margin-bottom: 20px;
            }

            .image-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 10px;
              margin: 20px 0;
            }
            @media screen and (min-width: 675px) {
              .contactus-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
              }
              .image-container {
                grid-template-columns: 1fr 1fr 1fr 1fr;
              }
              .aboutus-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 20px;
              }

              .francais {
                font-size: 1.1em;
              }
            }
          `}
        </style>
      </main>
    </div>
  );
}
