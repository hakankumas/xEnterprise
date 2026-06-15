import Slider from "@/components/home/Slider";
import About from "@/components/home/AboutComponent";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Partners from "@/components/home/Partners";
import References from "@/components/home/References";
import Blog from "@/components/home/Blog";

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Projects />
            <Partners />
            {/* <References /> */}
            {/* <Blog /> */}
        </div>
    );
}
