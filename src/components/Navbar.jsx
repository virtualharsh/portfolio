import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimateSvg } from "./AnimateSvg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
        { name: "Inspiration", path: "/inspiration" },
    ];

    const handleNavClick = (item) => {
        setIsOpen(false);
        if (item.path) {
            // navigate to external route like /inspiration
            navigate(item.path);
        } else if (isHomePage) {
            // same page: just scroll
            const section = document.getElementById(item.id);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
            // go to home page and pass scroll target
            navigate("/", { state: { scrollTo: item.id } });
        }
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-transparent px-8 py-8 backdrop-blur-lg md:flex md:items-center md:justify-between md:px-52">
            <div className="relative flex w-full items-center justify-between">
                <div
                    className="relative inline-block cursor-pointer pt-2 md:p-0"
                    onClick={() => navigate("/")}
                >
                    <span className="font-navbar relative z-10 text-3xl text-white">
                        Harsh Sonegra
                    </span>
                    <AnimateSvg
                        width="120"
                        height="24"
                        viewBox="0 0 210 24"
                        className="absolute -bottom-5 left-0 z-0"
                        path="M2,20 C60,10 150,10 208,20"
                        strokeColor="#ffffff"
                        strokeWidth={5}
                        strokeLinecap="square"
                        animationDuration={3}
                        animationDelay={0}
                        animationBounce={0.3}
                        reverseAnimation={false}
                        enableHoverAnimation={true}
                        hoverAnimationType="redraw"
                        hoverStrokeColor="#4f46e5"
                    />
                </div>
                <div className="z-50 p-4 md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <i
                            className={`text-3xl text-white ri-${isOpen ? "close-line" : "menu-line"}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 right-0 z-40 h-screen w-full bg-black transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="font-primary flex h-full flex-col justify-center gap-6 px-8 py-16 text-3xl font-extralight text-zinc-100">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => handleNavClick(item)}
                                className="hover:text-yellow-400"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
                <ul className="font-primary flex flex-row items-center gap-x-8 text-2xl font-extralight text-zinc-100">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => handleNavClick(item)}
                                className="hover:text-yellow-400 cursor-pointer"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
