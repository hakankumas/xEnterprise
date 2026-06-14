export default function OverAndCenter() {
    return (
        <div className="relative w-full h-[700px] p-4 lg:py-10 lg:px-0">
            <div className="w-full flex justify-center">
                <img
                    src="https://placehold.co/1500x1500"
                    alt="Hakkımızda"
                    className="w-full lg:w-2/3 h-96 lg:h-120 object-cover"
                />
            </div>
            {/* <div className="absolute inset-0 bg-black/50" /> */}
            <div className="absolute bottom-0 lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 flex flex-col gap-2 justify-center items-center lg:items-start bg-white text-black p-5 lg:px-7 h-fit w-fit lg:w-180 rounded-2xl mx-5 lg:mx-0">
                <p className="text-3xl w-full text-center">Hakkımızda</p>
                <h1 className="text-xl w-full text-center">Hakan KUMAŞ</h1>
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
