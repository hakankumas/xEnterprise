import Slider from "@/components/website/home/Slider";
import About from "@/components/website/home/AboutComponent";
import Services from "@/components/website/home/Services";
import Projects from "@/components/website/home/Projects";
import Partners from "@/components/website/home/Partners";
import References from "@/components/website/home/References";

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Partners />
            <Services />
            <Projects />
            <References />
        </div>
    );
}
