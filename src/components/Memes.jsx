import React, { useState, useEffect } from "react";

const Memes = () => {
    const quotes = [
        {
            id: 1,
            lines: [
                "// I don't always test my code...",
                "// my assitants does.",
                "// I call them users",
            ],
        },
        {
            id: 2,
            lines: [
                "👨‍💻 Open VS Code",
                "😎 Open 20 tabs in browser",
                "🙁 Stare at code",
                "❓ Question life choices",
                "😅 Add a semicolon;",
                "✅ Feel GREAT",
            ],
        },
        {
            id: 3,
            lines: [
                "If the computer knows:",
                "I am missing a semicolon",
                "Why won't it add it itself",
            ],
        },
        {
            id: 4,
            lines: [
                "🔥 In case of fire:",
                "",
                "1. git commit -a -m",
                "2. git push",
                "3. leave the building",
            ],
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 5000); // change every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex w-full justify-center md:w-1/3 md:justify-end">
            {/* Background blobs like shapes */}
            <div className="absolute -top-6 -left-8 h-24 w-24 rounded-full bg-pink-400 opacity-70 blur-2xl"></div>
            <div className="absolute top-20 -right-8 h-20 w-20 rotate-12 rounded-xl bg-green-400 opacity-60 blur-xl"></div>
            <div className="clip-path-triangle absolute right-0 bottom-0 h-16 w-16 rotate-45 bg-yellow-400 opacity-40 blur-md"></div>

            {/* Main Meme Card */}
            <div className="z-10 flex h-[200px] w-[350px] transform flex-col justify-center rounded-xl border border-gray-700 bg-gradient-to-br from-[#111] to-[#222] p-6 font-mono text-sm text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.03] md:-rotate-2 md:hover:rotate-1">
                {quotes[current].lines.map((line, index) => (
                    <p key={index} className="leading-relaxed text-gray-200">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Memes;
