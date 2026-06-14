export default function Over() {
    return (
        <div className="relative w-full h-fit lg:h-[700px] p-4 lg:py-10 lg:px-0 lg:mb-10">
            <div className="w-full flex justify-center">
                <img
                    src="https://placehold.co/1500x1500"
                    alt="Hakkımızda"
                    className="w-full lg:w-2/3 h-96 lg:h-120 object-cover"
                />
            </div>
            <div className="-translate-y-15 lg:translate-y-0 mx-5 lg:mx-0 lg:absolute lg:bottom-0 lg:right-5 flex flex-col gap-2 justify-center items-center lg:items-start bg-white text-black p-5 lg:px-7 h-fit w-fit lg:w-150 rounded-2xl">
                <p className="text-3xl">Hakkımızda</p>
                <h1 className="text-xl">Hakan KUMAŞ</h1>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae natus nesciunt culpa eius velit nobis praesentium
                    dolore exercitationem sunt commodi obcaecati illum esse
                    voluptas magni dolor, necessitatibus, odit quam, corrupti
                    alias? Impedit, nostrum ut porro nam voluptatem aperiam
                    ducimus soluta, consectetur exercitationem quis hic pariatur
                    sed, facilis debitis nisi dolorem maiores velit repellat
                    asperiores quidem.
                </p>
            </div>
        </div>
    );
}
