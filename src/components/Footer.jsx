import { div } from "motion/react-client";
import React, { useState } from "react";
import { toast } from "sonner";
import socials from "../data/socials.json"
const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) return;

        // Show toast
        toast.success("Thank you for subscribing! 🎉");

        // Clear the input
        setEmail("");
    };

    return (
        <div className="w-full border-t border-white/10 bg-black/80 backdrop-blur-md">
            <footer className="flex w-full flex-col gap-6 p-6 md:flex-row-reverse md:justify-between md:px-40">
                {/* Newsletter */}
                <div className="flex flex-col space-y-4">
                    <p className="mb-3 text-base font-semibold text-white">
                        Subscribe to the newsletter
                    </p>
                    <form
                        onSubmit={handleSubscribe}
                        className="flex max-w-md items-center gap-4 sm:flex-row"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-2/3 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/30 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-xl bg-white px-6 py-2 font-semibold text-black transition-colors hover:bg-gray-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 text-zinc-400">
                    <p className="text-lg text-zinc-300">
                        &copy; {new Date().getFullYear()} Harsh Sonegra. All
                        rights reserved.
                    </p>
                    <ul className="space-y-2 text-base">
                        {socials.map((contact, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <i className={`${contact.icon} text-xl`} />
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {contact.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
