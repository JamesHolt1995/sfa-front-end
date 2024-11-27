import Logo from "./Logo";
import Nav from "./Nav";
import Container from "./Container";

export default function Header() {
	return (
		<>
			<div className="py-5 lg:py-8 w-full text-white absolute top-0">
				<Container>
					<div className="flex justify-between">
						<div className="inline-block w-56 pr-4">
							<Logo />
						</div>

						<Nav />
					</div>
				</Container>
			</div>
		</>
	);
}
