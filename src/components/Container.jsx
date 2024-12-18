export default function Container({ children }) {
	return (
		<div className="mx-auto px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">{children}</div>
		</div>
	);
}
