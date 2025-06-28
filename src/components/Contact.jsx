import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-2 py-20 pt-10 text-white"
        >
            {/* Parallax Background Using Tailwind v4 Arbitrary Values */}
            <div className="absolute inset-0 -z-10 animate-[parallax_30s_linear_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.2),transparent_30%)] bg-[length:400%_400%]" />

            {/* Keyframe via Tailwind v4 arbitrary animation */}
            <style>
                {`
                @keyframes parallax {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 100% 100%; }
                }
                `}
            </style>

            <div className="relative mx-auto max-w-7xl text-center">
                <h2 className="mb-4 text-4xl font-bold">
                    <span className="underline">Let's Connect</span> 🤝
                </h2>
                <p className="mb-16 text-lg text-gray-300">
                    I'm always open to connecting on interesting ideas,
                    collaborations, or just a quick hello!
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Email */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <div className="flex flex-col items-center gap-3">
                            <i className="ri-mail-send-line rounded-full p-2 text-3xl text-red-400" />
                            <h3 className="text-xl font-semibold">Email</h3>
                            <a
                                href="mailto:harshsonegrahere@gmail.com"
                                className="text-sm break-all text-gray-200 transition-colors hover:text-red-300"
                            >
                                harshsonegrahere@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <div className="flex flex-col items-center gap-3">
                            <i className="ri-linkedin-box-fill rounded-full p-2 text-3xl text-blue-400" />
                            <h3 className="text-xl font-semibold">Linkedin</h3>
                            <a
                                href="https://www.linkedin.com/in/harshsonegra/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm break-all text-gray-200 transition-colors hover:text-blue-400"
                            >
                                Harsh Sonegra
                            </a>
                        </div>
                    </div>

                    {/* Twitter / X */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <div className="flex flex-col items-center gap-3">
                            <i className="ri-twitter-x-fill rounded-full p-2 text-3xl text-white" />
                            <h3 className="text-xl font-semibold">X</h3>
                            <a
                                href="https://x.com/ayyhaay_harsh"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm break-all text-gray-200 transition-colors hover:text-blue-400"
                            >
                                Harsh 🥂
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
