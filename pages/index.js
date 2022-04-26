import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Carousel from "../components/Carousel";
import imagesCarousel from "../data/images";
import banner from "../data/banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`L’Avant Goût Épicerie`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Situé à Pointe-St-Charles, L’Avant Goût Épicerie est votre épicier de quartier."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`L’Avant Goût Épicerie`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Situé à Pointe-St-Charles, L’Avant Goût Épicerie est votre épicier de quartier."
          key="ogdesc"
        />
        <meta property="og:url" content="https://lavantgout.ca" key="ogurl" />
        <meta
          property="og:image"
          content="/assets/images/lavantgout1.png"
          key="ogimage"
        />
        <meta
          property="og:image:secure_url"
          content="/assets/images/lavantgout1.png"
          key="ogimagesecure"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="468" />
        <meta property="og:image:alt" content="L’Avant Goût Épicerie Logo" />
        <meta
          property="og:site_name"
          content={`L’Avant Goût Épicerie`}
          key="ogsitename"
        />
        <meta
          property="og:video"
          content="/assets/video/lavantgout-video.mp4"
        />
        <meta
          property="og:video:secure_url"
          content="/assets/video/lavantgout-video.mp4"
        />
        <meta
          property="og:video:type"
          content="application/x-shockwave-flash"
        />
        <meta property="og:video:width" content="300" />
        <meta property="og:video:height" content="400" />
      </Head>

      <main>
        <div className="_width-site">
          <header>
            <div className="flex justify-center">
              <Image
                src="/assets/images/lavantgout2.svg"
                layout="intrinsic"
                alt="L'Avant Goût Épicerie"
                priority={true}
                width={400}
                height={150}
              />
            </div>
            <nav className="flex justify-center gap-5 mb-5 cursor-pointer">
              <Link href="https://m.facebook.com/lavantgoutepicerie/" passHref>
                <BsFacebook size={25} />
              </Link>
              <Link
                href="https://www.instagram.com/lavantgoutepicerie/"
                passHref
              >
                <BsInstagram size={25} />
              </Link>
            </nav>
          </header>
        </div>
        <div>
          <div className="hidden sm:flex sm:space-x-5 sm:my-10 sm:overflow-x-auto sm:w-full h-[500px] _no-scrollbar sm:px-4">
            {banner.map((img, i) => {
              return (
                // hidden relative sm:block
                <div className="rounded-lg" key={`bannerimgs-${i}`}>
                  {!img.type && img.type !== "video" ? (
                    <img
                      className="rounded-lg w-full h-full object-left object-cover min-w-[300px] sm:min-w-[810px]"
                      src={img.src}
                      alt={img.alt}
                    />
                  ) : (
                    <video
                      src={img.src}
                      alt={img.alt}
                      playsInline="autoplay"
                      className="rounded-lg object-top object-cover min-w-[280px] sm:min-w-[400px] h-full"
                      autoPlay
                      muted={true}
                      loop
                      controls
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="_width-site block sm:hidden rounded-lg max-h-fit">
            <img
              src="/assets/images/promos/tastingevent-0430.webp"
              alt="L'Avant Gout Tasting Event April 30th"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="_width-site">
          <section className="_width-module">
            <h1 className="_title-h1">
              Bienvenue chez votre épicier de quartier!
            </h1>
            <div className="w-full my-8">
              <p className="_text-fr">
                Situé à Pointe-St-Charles sur une de ses artères principales, la
                rue Centre, L’Avant Goût Épicerie est votre épicier de quartier.
                Ses tons terreux qui contrastent avec des couleurs vibrantes
                vous invitent à découvrir sa grande sélection de produits locaux
                et du terroir.
              </p>
              <p>
                Located in Pointe St-Charles on one of its main arteries, Centre
                Street, L’Avant Gout Épicerie is your go to neighborhood
                grocery. With its carefully curated contrast of earthy tones to
                vibrant colors, its décor invites you to discover its vast
                selection of local products from around the province.{" "}
              </p>{" "}
            </div>
            <div className="text-center hidden sm:block">
              <span>&#8226;</span>
              <span>&#8226;</span>
              <span>&#8226;</span>
            </div>
            <div className="block sm:hidden">
              <video
                src="/assets/video/promos/wine-pizza-promo-0430.mp4"
                alt="L'Avant Gout Épicerie Wine Promotion"
                playsInline="autoplay"
                className="rounded-lg"
                autoPlay
                muted={true}
                loop
                controls
              />
            </div>
            <div className="w-full my-8">
              <p className="_text-fr">
                Des produits frais, de la mer et des viandes du Québec, en
                passant par une variété de fromages, charcuteries et sans
                oublier les produits végétariens, végétaliens et sans gluten,
                L’Avant Goût vous offre tout pour votre prochain repas.
              </p>
              <p>
                From fresh produce to fish and seafood, meats, cheeses and cured
                meats, an array of vegetarian, vegan and gluten-free options,
                beer from Quebec microbreweries, Quebec’s finest wines and even
                items in bulk including local cleaning products.{" "}
              </p>
            </div>
            <div className="text-center hidden sm:block">
              <span>&#8226;</span>
              <span>&#8226;</span>
              <span>&#8226;</span>
            </div>
            <div className="block sm:hidden">
              <video
                src="/assets/video/lavantgout-video.mp4"
                alt="L'Avant Gout Épicerie viens nous visiter"
                playsInline="autoplay"
                className="rounded-lg"
                autoPlay
                muted={true}
                loop
                controls
              />
            </div>
            <div className="w-full my-8">
              <p className="_text-fr">
                On y retrouve notamment une grande variété de bières de
                microbrasseries et des vins du Québec méticuleusement choisis.
                De plus, vous pouvez retrouver des produits ménagers faits au
                Québec et une variété de produits en vrac. L’Avant Goût Épicerie
                est l’endroit idéal pour trouver tout ce dont vous avez besoin.
              </p>
              <p>
                L’Avant Gout is your one stop shop. Be sure to ask about the
                numerous specialty items only found at L’Avant Gout Épicerie!
              </p>
            </div>
          </section>
        </div>
        <Carousel images={imagesCarousel} />
        <div className="_width-site">
          <section className="_width-module">
            <div className="border-solid border-[1px] border-[#41513a] p-4 rounded-md sm:grid sm:grid-cols-2 sm:gap-3">
              <div>
                <h3 className="_title-h3">Au plaisir de vous accueillir!</h3>
                <p className="pb-4">
                  2126 rue Centre, Pointe St Charles
                  <br /> Montréal, Québec H3K 1J4
                </p>
                <p className="pb-4">
                  Ouvert du lundi au vendredi de 9h-20h
                  <br /> le samedi et dimanche de 9h-19h
                </p>
                <p className="pb-4">
                  Open Monday to Friday 9am to 8pm
                  <br /> Saturday to Sunday 9am to 7pm
                </p>
                <p className="pb-4">514 419-1331</p>
              </div>
              <div className="relative w-full h-[350px]">
                <Image
                  className="rounded-lg"
                  src="/assets/images/lavantgout-proprios.webp"
                  alt="Les proprios de l'avant goût épicerie"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
          </section>
        </div>
        <footer className=" mt-10 text-sm py-4 bg-[#41513a] bg-opacity-50 text-white">
          <div className="_width-site flex items-center justify-between">
            <p className="">&copy; Tout droit résérvé 2022</p>
            <p className="">
              Fait avec beaucoup d ❤ par
              <a
                href="https://www.linkedin.com/in/allison-e-hamilton/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Alli
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
