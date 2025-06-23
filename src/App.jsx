import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen w-full overflow-x-hidden bg-black px-4 pt-20 text-white md:px-28">
                <Navbar />
                <Hero />
                {/* <Contact /> */}
            </main>
        </>
    );
}
