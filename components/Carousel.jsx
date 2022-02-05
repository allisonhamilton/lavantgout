import images from "../data/images";

const Carousel = () => {
	return (
		<div className="flex space-x-5 my-10 overflow-x-auto h-[300px] sm:h-[400px] w-full _no-scrollbar px-4">
			{images.map((image, i) => {
				return (
					<div key={i} className="aspect-4/3 ease-out hover:shadow-lg">
						<img
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
