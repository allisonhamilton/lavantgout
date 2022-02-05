import images from "../data/images";

const Carousel = () => {
	return (
		<div className="flex space-x-5 my-10 overflow-x-auto h-[400px] sm:h-[400px] _no-scrollbar px-4">
			{images.map((image, i) => {
				return (
					<div key={i} className="min-w-[500px]">
						<img
							key={i}
							className="object-center object-cover w-full h-full rounded-lg"
							src={image.src}
							alt={image.alt}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Carousel;
