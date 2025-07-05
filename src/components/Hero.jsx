import { Button } from "./Button";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
    const [isDay, setIsDay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsDay((prev) => !prev);
        }, 5000); // toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const RESUME_LINK = import.meta.env.VITE_RESUME;    


    // Inside the Hero component
    const clouds = useMemo(() => {
        return Array.from({ length: 5 }).map(() => ({
            top: Math.random() * 30 + 5, // 5% - 35% vertically
            right: Math.random() * 60 + 5, // 5% - 65% horizontally
            size: Math.random() * 2 + 4, // text-4xl to text-6xl
        }));
    }, []);

    return (
        <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-20 overflow-x-hidden pb-20 md:flex-row-reverse md:gap-72">
            <div className="flex flex-col items-center gap-4 md:max-w-xl md:items-start lg:max-w-2xl">
                <h1 className="font-heading text-4xl font-bold tracking-wider md:text-6xl">
                    Harsh Sonegra
                </h1>

                <p className="font-primary text-center text-2xl tracking-wide md:text-left lg:block lg:max-w-lg">
                    Sometimes, I do not think about coding...
                </p>

                <div className="flex gap-3">
                    <Button
                        variant="primary"
                        size="sm"
                        icon="ri-arrow-right-up-line"
                        className="w-max tracking-wide"
                        onClick={() => {
                            window.open(RESUME_LINK, "_blank");
                        }}
                    >
                        Resume
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        icon="ri-arrow-right-up-line"
                        className="w-max tracking-wide"
                        onClick={() => {
                            window.open(
                                "https://github.com/virtualharsh",
                                "_blank",
                            );
                        }}
                    >
                        Github
                    </Button>
                </div>
            </div>

            {/* Optional image */}
            {/* <div className="h-max w-full max-w-lg rounded-2xl bg-yellow-200 px-5 pt-20 pb-0">
                <figure>
                    <img
                        src="/coding.svg"
                        alt="Coding theme"
                        className="w-full object-contain"
                    />
                    <figcaption className="hidden">
                        Photo from
                        <a href="https://www.vecteezy.com/">vecteezy.com</a>
                    </figcaption>
                </figure>
            </div> */}

            <div
                className={`relative h-max w-full max-w-lg overflow-hidden rounded-2xl px-5 pt-20 pb-0 transition-all duration-[2500ms] ${
                    isDay ? "bg-yellow-400" : "bg-[#0f172a]"
                }`}
            >
                {/* Sun or Moon */}
                <div className="absolute top-5 left-5 z-20 text-7xl transition-all duration-[3000ms] md:top-5 md:left-8">
                    <i
                        className={`${
                            isDay
                                ? "ri-sun-fill text-8xl text-black"
                                : "ri-moon-fill text-white"
                        }`}
                    ></i>
                </div>

                {/* Stars only at night */}
                {!isDay && (
                    <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[2000ms]">
                        {Array.from({ length: 30 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="absolute h-1 w-1 rounded-full bg-white"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `twinkle 2s ${idx * 0.3}s infinite ease-in-out`,
                                }}
                            />
                        ))}
                    </div>
                )}

                {isDay && (
                    <div className="pointer-events-none absolute inset-0 z-0 text-5xl text-black opacity-60 transition-opacity duration-[2000ms]">
                        <div className="floatCloud ri-cloudy-line absolute top-20 right-10"></div>
                        <div className="floatCloud ri-cloudy-fill absolute top-18 right-15"></div>

                        <div className="floatCloud ri-cloudy-line absolute top-50 right-10"></div>
                        <div className="floatCloud ri-cloudy-fill absolute top-52 right-15"></div>

                        <div className="floatCloud ri-cloud-fill absolute top-4 right-40"></div>
                        <div className="floatCloud ri-cloud-line absolute top-6 right-45"></div>

                        <div className="floatCloud ri-cloudy-line absolute top-30 left-5"></div>
                        <div className="floatCloud ri-cloudy-fill absolute top-32 left-8"></div>

                        <div className="floatCloud ri-cloudy-line absolute top-50 left-24"></div>
                        <div className="floatCloud ri-cloudy-fill absolute top-52 left-22"></div>
                    </div>
                )}

                {/* Coding image */}
                <figure className="relative z-10">
                    <img
                        src="/coding.svg"
                        alt="Coding theme"
                        className="w-full object-contain"
                    />

                    {/* Flying plane */}

                    <figcaption className="hidden">
                        Photo from{" "}
                        <a href="https://www.vecteezy.com/">vecteezy.com</a>
                    </figcaption>
                </figure>

                {/* Custom CSS for twinkling stars */}
                <style>
                    {`
                        @keyframes twinkle {
                            0%, 100% { opacity: 0.2; }
                            50% { opacity: 1; }
                        }
                        
                    `}
                </style>
            </div>
        </section>
    );
};

export default Hero;
