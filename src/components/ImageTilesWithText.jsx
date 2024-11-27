import Container from "./Container";
import Susan from "@/img/Susan-Banister.jpg";
import Marc from "@/img/marc.jpg";
import Rachel from "@/img/Rachel-Hartley.jpg";
import Conference from "@/img/conference.jpg";
import Image from "next/image";
import Button from "./Button";

export default function ImageTilesWithText() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<Container>
				<div className="max-w-4xl">
					<h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-balance">
						Let’s build your resilience to modern slavery and labour
						exploitation
					</h1>
					<p className="mt-6 text-balance text-xl/8 text-sfa-blue-600">
						The Slave-Free Alliance team have direct experience of helping
						victims of modern slavery and supporting organisations to fulfil
						their corporate responsibilities. Those organisations we partner
						with are supported by our team of former law enforcement officers
						and experts in business management, procurement, supply chain and
						human rights.
					</p>
				</div>
				<section className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
							Your critical friend
						</h2>
						<p className="mt-6 text-lg text-sfa-blue-500 mb-10">
							Our partners, clients and members across the UK, USA and Australia
							trust us to be their critical friend and deliver tailored services
							to make their operations and supply chains resilient to labour
							exploitation and to address issues safely. Slave-Free Alliance
							offers flexible, affordable solutions, accessible to all
							organisations.
						</p>
						<Button buttonText="Membership" type="primary" />
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<Image
									alt=""
									src={Marc}
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<Image
									alt=""
									src={Rachel}
									className="block size-full object-cover"
								/>
							</div>
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<Image
									alt=""
									src={Susan}
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<Image
									alt=""
									src={Conference}
									className="block size-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="max-lg:mt-16 lg:col-span-1">
						<p className="text-xl font-bold text-sfa-blue">
							Modern slavery statistics
						</p>
						<hr className="mt-6 border-t border-gray-200" />
						<dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-sfa-blue-600">
									£193 billion made each year from modern slavery, that’s over
									£5,500 every second.
								</dt>
								<dd className="order-first text-5xl font-semibold tracking-tight">
									£<span>193</span>bn
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-sfa-blue-600 text-balance">
									Over 77% of companies believe slavery is likely to exist in
									their supply chain.
								</dt>
								<dd className="order-first text-5xl font-semibold tracking-tight">
									<span>77</span>%
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
								<dt className="text-sm/6 text-sfa-blue-600 text-balance">
									There are 49.6 million people in modern slavery worldwide.
								</dt>
								<dd className="order-first text-5xl font-semibold tracking-tight">
									<span>49.6</span>M
								</dd>
							</div>
							<div className="flex flex-col gap-y-2">
								<dt className="text-sm/6 text-gray-600 text-balance">
									Potential cases identified and referred in the UK last year.
								</dt>
								<dd className="order-first text-5xl font-semibold tracking-tight">
									<span>16,938</span>
								</dd>
							</div>
						</dl>
					</div>
				</section>
			</Container>
		</div>
	);
}
