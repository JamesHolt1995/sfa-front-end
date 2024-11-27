import Button from "./Button";
import Container from "./Container";

export default function VideoWithText() {
	return (
		<section className="mb-10 lg:mb-20">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<div className="pt-[56.25%] relative rounded-xl overflow-hidden">
						<iframe
							src="https://player.vimeo.com/video/706604057?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
							frameborder="0"
							allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
							className="absolute top-0 left-0 w-full h-full"
							title="Slave-Free Alliance: What We Do and How We Can Help Your Organisation"
						></iframe>
					</div>
					<div className="flex flex-col justify-center">
						<h2 className="font-bold text-3xl mb-14">
							Slave-Free Alliance offers a suite of specialist services
							delivered by unrivalled experts, with options suitable for
							organisations of all sizes.
						</h2>
						<div className="flex gap-6 md:gap-8 flex-wrap">
							<Button buttonText="Our Services" href="#" type="primary" />
							<Button
								buttonText="Get in touch"
								href="#"
								type="secondary"
								color="dark"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
