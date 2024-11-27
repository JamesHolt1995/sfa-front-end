import Image from "next/image";
import AsdaLogo from "@/img/Asda_logo.svg";
import AnnaSmith from "@/img/anna-smith.jpg";

export default function Quote() {
	return (
		<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
			{/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
			<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
			<div className="mx-auto max-w-2xl lg:max-w-4xl">
				<Image alt="" src={AsdaLogo} className="mx-auto h-12" />
				<figure className="mt-10">
					<blockquote className="text-center text-xl/8 font-semibold text-sfa-blue sm:text-2xl/9">
						<p>
							&quot;Asda became a member of Slave-Free Alliance in 2021, and our
							current and ongoing membership has been truly beneficial. SFA have
							been a critical friend helping us to improve and strengthen our
							resilience to modern slavery and working with us to build our
							approach to having businesses and supply chains where slavery
							forms no part of it.&quot;
						</p>
					</blockquote>
					<figcaption className="mt-10">
						<Image
							alt=""
							src={AnnaSmith}
							className="mx-auto size-20 rounded-full"
						/>
						<div className="mt-4 flex flex-col max-w-lg text-center text-balance mx-auto items-center justify-center space-x-3 text-base">
							<div className="font-semibold text-sfa-blue-600">Anna Smith</div>
							{/* <svg
								width={3}
								height={3}
								viewBox="0 0 2 2"
								aria-hidden="true"
								className="fill-sfa-blue"
							>
								<circle r={1} cx={1} cy={1} />
							</svg> */}
							<div className="text-sfa-blue-600">
								Senior Manager, Modern Slavery SME, Responsible Sourcing and
								Human Rights, ASDA{" "}
							</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
