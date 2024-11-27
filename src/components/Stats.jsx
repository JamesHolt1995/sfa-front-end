import Container from "./Container";

const stats = [
	{
		id: 1,
		name: "There are 49.6 million people in modern slavery worldwide.",
		value: "49.6 million",
	},
	{
		id: 1,
		name: "Over 77% of companies believe slavery is likely to exist in their supply chain.",
		value: "77%",
	},
	{
		id: 3,
		name: "£193 billion made each year from modern slavery, that’s over £5,500 every second.",
		value: "£193 billion",
	},
];

export default function Stats() {
	return (
		<div className="py-24 pb-16 sm:py-32 sm:pb-16">
			<Container>
				<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="mx-auto flex max-w-xs flex-col gap-y-4"
						>
							<dt className="text-base/7 text-sfa-blue-600">{stat.name}</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-sfa-blue sm:text-5xl">
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</Container>
		</div>
	);
}
