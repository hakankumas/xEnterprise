export default function LeftAndRight() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:py-10 lg:px-0 gap-4 lg:gap-24">
            <div>
                <img
                    src="https://placehold.co/1500x1500"
                    alt="Hakkımızda"
                    className="w-full h-96 lg:h-120 object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
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
