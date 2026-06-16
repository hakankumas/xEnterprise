import Slider from "@/components/home/Slider";
import About from "@/components/home/AboutComponent";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Partners from "@/components/home/Partners";
import References from "@/components/home/References";

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
