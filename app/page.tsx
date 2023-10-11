import Image from "next/image";

export default async function Page() {
    const a = (text: string, link: string) => {
        return (
            <a rel="noopener noreferrer" target="_blank" href={link} >{text}</a>
        )
    }

	return (
		<section className="flex flex-col justify-start items-center w-full h-full text-center px-6">
			<div className="w-full flex flex-col items-center justify-center grow-0 pt-[50px] pb-8 lg:pb-14 lg:px-4 z-50 gap-9">
				<Image
					alt={"logo-square"}
					src={"/logo-square.png"}
					className="shadow-icon rounded-icon noselect"
					width={90}
					height={90}
					loading="eager"
				/>
				{/* <div className="bg-gradient-to-r from-transparent via-white/50 to-transparent h-[1px] w-full max-w-sm mt-9 mb-7"></div> */}
				<h1 className="text-neutral-400 text-4xl leading-[33px] font-medium [&>span]:text-neutral-50 [&>span]:line-through">
					{'"Like '}
					<span>MacTracker</span>
					{', but for Tesla."'}
				</h1>
			</div>

			<div className="relative w-full h-full max-h-[700px] md:min-h-max flex md:hidden flex-col items-center justify-center lg:my-14 z-50 p-4">
                <Image
                    alt="15-pro-static"
                    src="/images/15-pro-static.png"
                    className="w-full h-full z-50 noselect object-contain"
                    width={1000}
                    height={1000}
                />
			</div>

			<div className="relative w-full h-full hidden md:flex flex-col justify-center py-8 z-50 min-h-[615px]">
				<Image
					alt="demo-b2"
					src="/images/demo-b2.png"
					className="w-full h-full z-50 noselect object-contain"
					fill
				/>
			</div>

			<div className="w-full flex flex-col items-center justify-center grow-0 pt-8 pb-[50px] gap-16 lg:px-4 z-50 text-neutral-400 text-sm font-medium [&>*>*>a]:text-neutral-50 [&>*>*>a]:underline [&>*>*>a]:cursor-pointer [&>*>span>span]:text-neutral-50">
				<div className="inline-flex flex-col gap-4 items-center justify-center">
                    <span className="text-neutral-100 font-bold text-[33px] leading-[33px] mb-4">SOON!</span>

					<span>
						{"TDB "}
						<span>1.0.0</span>
						{" (iOS "}
						<span>15.7.9</span>
						{"+, iPadOS "}
						<span>15.7.9</span>
						{"+, macOS Monterey "}
						<span>12.7</span>
						{"+)"}
					</span>
				</div>

				<div className="inline-flex flex-col gap-4 items-center justify-center">
					<span>
						{"Developed by "}
                        {a("Alexander Bays", "https://www.956mb.com/")}
						{". © 2023"}
					</span>
					<span>
						{"Tesla is a registered trademark of "}
                        {a("Tesla, Inc", "https://www.tesla.com/")}
						{"."}
					</span>
				</div>
			</div>
		</section>
	);
}
