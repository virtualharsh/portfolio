import { useState } from "react";
import { AnimateSvg } from "./AnimateSvg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed  top-0 left-0 z-50 w-full bg-black/90 px-8 py-8 backdrop-blur-sm md:flex md:items-center md:justify-between md:px-28">
            {/* Logo */}
            <div className="relative inline-block pt-2 md:p-0">
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

            {/* Hamburger Icon */}
            <div className="absolute top-4 p-4 md:p-0 right-4 z-50 md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <i
                        className={`text-3xl text-white ri-${isOpen ? "close-line" : "menu-line"}`}
                    ></i>
                </button>
            </div>

            {/* Nav Items */}
            <div
                className={`absolute top-full left-0 w-full bg-black transition-all duration-300 ease-in-out md:pointer-events-auto md:static md:block md:w-auto md:transform-none md:bg-transparent md:opacity-100 ${
                    isOpen
                        ? "pointer-events-auto mt-5 translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                }`}
            >
                <ul className="font-primary flex flex-col gap-4 px-6 py-4 text-2xl font-extralight text-zinc-200 md:flex-row md:items-center md:gap-x-8 md:p-1 md:text-3xl">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Projects</li>
                    <li>Inspiration</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
