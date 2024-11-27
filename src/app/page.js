import Image from "next/image";
import Header from "../components/Header";
import Container from "../components/Container";
import HeroImage from "./img/tim-mossholder-Kx060cRsmt0-unsplash.jpg";
import Button from "../components/Button";
import MemberLogos from "../components/MemberLogos";
import Stats from "../components/Stats";
import ImageTilesWithText from "../components/ImageTilesWithText";
import Quote from "../components/Quote";
import VideoWithText from "../components/VideoWithText";
import ImageWithText from "../components/ImageWithText";

export default function Home() {
	return (
		<>
			<script async src="https://player.vimeo.com/api/player.js"></script>
			<Header />
			<div className="bg-sfa-blue w-full pt-32 lg:pt-40 pb-20">
				<Container>
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="max-w-2xl">
							<div className="text-sm tracking-widest text-white mb-6 opacity-50 pt-5">
								PARTNER WITH SLAVE-FREE ALLIANCE
							</div>
							<h1 className="text-5xl sm:text-5xl md:text-6xl font-display font-normal text-white mb-8 leading-tight text-balance">
								Increase your resilience to modern slavery
							</h1>
							<p className="text-white text-xl/8 mb-12 opacity-90 md:text-balance">
								Slave-Free Alliance is a team of leading experts committed to
								eradicating modern slavery and labour exploitation in
								organisations and supply chains worldwide.
							</p>
							<div className="flex gap-6 md:gap-8 flex-wrap">
								<Button buttonText="Our Services" href="#" type="primary" />
								<Button
									buttonText="Why partner with us"
									href="#"
									type="secondary"
								/>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden w-full h-[60vw] -mb-32 lg:-mr-80 lg:w-[800px] lg:h-[600px]">
							<Image
								src={HeroImage}
								alt="strawberry pickers in a field"
								width="0"
								height="0"
								className="relative w-full h-full object-cover"
							/>
						</div>
					</div>
				</Container>
			</div>
			<ImageTilesWithText />
			{/* <Container>
				<div className="pt-40  max-w-3xl space-y-8">
					<h2 className="font-display text-5xl text-sfa-blue">
						Let’s build your resilience to modern slavery and labour
						exploitation
					</h2>
					<p className="text-sfa-blue-600 text-lg">
						Slave-Free Alliance is a team of unrivalled experts dedicated to
						addressing modern slavery and labour exploitation in organisations
						and supply chains globally. Our partners, clients and members across
						the UK, USA and Australia trust us to be their critical friend and
						deliver tailored services to make their operations and supply chains
						resilient to labour exploitation and to address issues safely.
						Slave-Free Alliance offers flexible, affordable solutions,
						accessible to all organisations.
					</p>
				</div>
			</Container> */}
			{/* <Stats /> */}
			<VideoWithText />
			<MemberLogos />
			<Quote />
			<ImageWithText />
			{/*  */}
		</>
	);
}
