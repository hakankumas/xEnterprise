import Slider from "@/components/home/Slider";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Partners from "@/components/home/Partners";
import References from "@/components/home/References";
import Blog from "@/components/home/Blog";
import About from "@/components/home/AboutComponent";

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Projects />
            <Partners />
            <References />
            <Blog />
        </div>
    );
}
