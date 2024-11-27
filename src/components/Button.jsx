import clsx from "clsx";

export default function Button({ buttonText, href, type = "primary", color }) {
	return (
		<a
			href={href}
			className={clsx(
				"py-4",
				color === "dark" ? "text-sfa-blue" : "text-white",
				type === "primary"
					? "bg-sfa-orange px-6 rounded-md font-bold"
					: "underline"
			)}
		>
			{buttonText}
		</a>
	);
}
