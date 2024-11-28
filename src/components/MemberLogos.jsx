import Container from "./Container";
import Image from "next/image";
import AsdaLogo from "@/img/Asda_logo.svg";
import MorrisonsLogo from "@/img/Morrisons.svg";
import AldiLogo from "@/img/Aldi.svg";
import AvivaLogo from "@/img/aviva.svg";
import ElecttricitNorthWestLogo from "@/img/Electricity_North_West_logo.svg";
import YodelLogo from "@/img/Yodel.svg";
import AstraZenecaLogo from "@/img/AstraZeneca.svg";
import ManchesterUniversityLogo from "@/img/manchesteruni.svg";
import MAGLogo from "@/img/MAG.svg";
import LiverpoolAirportLogo from "@/img/Liverpool_Airport_Logo.svg";
import CurrysLogo from "@/img/Currys_Logo.svg";
import SevernTrentLogo from "@/img/SevernTrent.svg";
import UnitedUtilitiesLogo from "@/img/United_Utilities_logo.svg";
import BiffaLogo from "@/img/biffa.svg";
import ExperianLogo from "@/img/Experian_logo.svg";
import ScottishPowerLogo from "@/img/scottish-power.svg";
import HomeserveLogo from "@/img/homeserve-vector-logo.svg";

const memberLogos = [
	{ name: "United Utilities", image: UnitedUtilitiesLogo },
	{ name: "Morrisons", image: MorrisonsLogo },
	{ name: "Aldi", image: AldiLogo },
	{ name: "Aviva", image: AvivaLogo },
	{ name: "Electricity North West", image: ElecttricitNorthWestLogo },
	{ name: "AstraZeneca", image: AstraZenecaLogo },
	{ name: "The University of Manchester", image: ManchesterUniversityLogo },
	{ name: "MAG", image: MAGLogo },
	{ name: "Liverpool John Lennon Airport", image: LiverpoolAirportLogo },
	{ name: "Currys", image: CurrysLogo },
	{ name: "Severn Trent", image: SevernTrentLogo },
	{ name: "YODEL", image: YodelLogo },
	{ name: "Biffa", image: BiffaLogo },
	{ name: "Experian", image: ExperianLogo },
	{ name: "Scottish Power", image: ScottishPowerLogo },
	{ name: "HomeServe", image: HomeserveLogo },
];

export default function MemberLogos() {
	return (
		<div className="bg-white py-4 sm:py-8">
			<Container>
				<div>
					<h2 className="text-2xl font-bold mb-8 text-sfa-blue">
						Just some of our members
					</h2>
				</div>
				<div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
					{memberLogos.map((member) => {
						return (
							<div
								key={member.name}
								className="bg-sfa-blue-100 p-8 sm:p-10 flex items-center"
							>
								<Image
									alt={member.name}
									src={
										member.image ||
										"https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
									}
									width={158}
									height={56}
									className="max-h-14 w-full object-contain"
								/>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}
