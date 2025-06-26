import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";


export default function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen w-full overflow-x-hidden bg-black px-4 pt-20 text-white md:px-52">
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="resources">{/* <Resources /> */}</section>
                <section id="contact">{/* <Contact /> */}</section>
                <section id="inspiration">{/* <Inspiration /> */}</section>
            </main>
        </>
    );
}
