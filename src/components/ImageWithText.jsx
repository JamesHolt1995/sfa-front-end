import Image from "next/image";
import Container from "./Container";
import Meeting from "@/img/meeting.jpg";
import Button from "./Button";

export default function ImageWithText() {
	return (
		<div className="overflow-hidden mb-20">
			<Container>
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
					<div className="px-6 lg:px-0">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2 className="text-base/7 font-semibold text-sfa-orange">
								Talk with us
							</h2>
							<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								Let&apos;s address modern slavery - together.
							</p>
							<p className="mt-6 text-lg/8 text-gray-600 mb-10">
								Contact us to find out how we can work with you. We will get
								back to you as soon as we can.
							</p>
							<Button buttonText="Get in touch" />
						</div>
					</div>
					<div className="sm:px-6 lg:px-0">
						<div className="rounded-xl overflow-hidden mx-auto max-w-2xl sm:mx-0 sm:w-full">
							<Image
								alt=""
								src={Meeting}
								className="-mb-12 w-full max-w-none bg-gray-800 ring-1 ring-white/10"
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
