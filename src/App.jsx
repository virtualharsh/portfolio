import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Inspiration from "./components/Inspiration";
import { Toaster, toast } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
    return (
        <Router>
            <ScrollToTop />

            <Navbar />
            <Toaster position="top-center" richColors />

            <main className="min-h-screen w-full overflow-x-hidden bg-black px-4 pt-20 text-white md:px-52">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <section id="home">
                                    <Hero />
                                </section>
                                <section id="about">
                                    <About />
                                </section>
                                <section id="projects">
                                    <Projects />
                                </section>
                                <section id="contact">
                                    <Contact />
                                </section>
                                <section>
                                    <Footer />
                                </section>
                            </>
                        }
                    />
                    <Route path="/inspiration" element={<Inspiration />} />
                </Routes>
            </main>
        </Router>
    );
}
