import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Carousel from "../components/Carousel";
export default function Home() {
	return (
		<div>
			<Head>
				<title>{`L’Avant Goût Épicerie`}</title>
				<meta
					name="description"
					content="Situé à Pointe-St-Charles, L’Avant Goût Épicerie est votre épicier de quartier."
				/>
				<link rel="icon" href="/favicon.ico" />
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
					<div className="rounded-lg overflow-hidden">
						<div className="hidden relative sm:block w-full h-[400px] mx-auto mb-3">
							<Image
								className="rounded-lg"
								src="/assets/images/figtree.jpg"
								layout="fill"
								objectFit="cover"
								priority={true}
								alt="L’Avant Gout Épicerie Fig Tree"
							/>
						</div>
						<video
							className="sm:hidden"
							src="/assets/video/lavantgout-video.mp4"
							playsInline="autoplay"
							autoPlay
							muted={true}
							loop
							controls
						></video>
					</div>
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
						<div className="text-center">
							<span>&#8226;</span>
							<span>&#8226;</span>
							<span>&#8226;</span>
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
						<div className="text-center">
							<span>&#8226;</span>
							<span>&#8226;</span>
							<span>&#8226;</span>
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
				<Carousel />
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
