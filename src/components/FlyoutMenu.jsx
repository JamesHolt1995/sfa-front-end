import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import {
	RectangleStackIcon,
	UserGroupIcon,
	ChatBubbleBottomCenterTextIcon,
	ComputerDesktopIcon,
	ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

export default function FlyoutMenu({ item }) {
	return (
		<Popover className="relative">
			<PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none hover:opacity-80">
				<span className="text-base">{item.title}</span>
				<ChevronDownIcon aria-hidden="true" className="h-6 w-6" />
			</PopoverButton>

			<PopoverPanel
				transition
				className="absolute z-10 mt-5 flex w-screen transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div
					className={clsx(
						"w-screen flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",
						item.type == "twoColumn" ? "max-w-4xl" : "max-w-sm"
					)}
				>
					<div className="p-4">
						{item.type == "twoColumn" ? (
							<div className="flex gap-4">
								<div className="">
									<h3
										className={clsx(
											"p-4 text-sm font-bold uppercase opacity-50 text-sfa-blue tracking-wider",
											item.colOne.items[0].icon ? "px-4" : "px-5"
										)}
									>
										{item.colOne.title}
									</h3>
									{item.colOne.items.map((item) => (
										<div
											key={item.name}
											className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
										>
											{item.icon && (
												<div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														aria-hidden="true"
														className="h-5 w-5 text-gray-600 group-hover:text-sfa-orange"
													/>
												</div>
											)}
											<div className="">
												<a
													href={item.href}
													className="font-semibold text-sfa-blue group-hover:text-sfa-orange"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-gray-600">{item.description}</p>
											</div>
										</div>
									))}
								</div>
								<div className="">
									<h3
										className={clsx(
											"p-4 text-sm text-sfa-blue font-bold uppercase opacity-50 tracking-wider",
											item.colTwo.items[0].icon ? "px-4" : "px-5"
										)}
									>
										{item.colTwo.title}
									</h3>
									{item.colTwo.items.map((item) => (
										<div
											key={item.name}
											className={clsx(
												"group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50",
												item.icon ? "" : "px-5"
											)}
										>
											{item.icon && (
												<div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														aria-hidden="true"
														className="h-5 w-5 text-gray-600 group-hover:text-sfa-orange"
													/>
												</div>
											)}
											<div>
												<a
													href={item.href}
													className="font-semibold text-sfa-blue group-hover:text-sfa-orange"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-gray-600">{item.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						) : (
							item.items.map((item) => (
								<div
									key={item.name}
									className={clsx(
										"group relative flex gap-x-6 rounded-lg p-4 max-w-max hover:bg-gray-50",
										item.icon ? "" : "px-5"
									)}
								>
									{item.icon && (
										<div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<item.icon
												aria-hidden="true"
												className="h-5 w-5 text-gray-600 group-hover:text-sfa-orange"
											/>
										</div>
									)}
									<div>
										<a
											href={item.href}
											className="font-semibold text-sfa-blue group-hover:text-sfa-orange"
										>
											{item.name}
											<span className="absolute inset-0" />
										</a>
										<p className="mt-1 text-gray-600">{item.description}</p>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</PopoverPanel>
		</Popover>
	);
}
