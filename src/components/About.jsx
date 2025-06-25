import Memes from "./Memes";

const About = () => {
    return (
        <section className="bg-black px-14 py-10 text-white md:px-16 md:py-16">
            <div className="mx-auto flex max-w-full flex-col-reverse items-center justify-around gap-y-10 md:flex-row md:items-center">
                {/* Text Content */}
                <div className="w-full md:w-3/6">
                    <h2 className="font-roboto mb-6 text-3xl font-bold md:mb-8 md:text-5xl">
                        Hey there! I'm Harsh{" "}
                        <span className="inline-block">👋</span>
                    </h2>

                    <p className="mb-5 leading-relaxed tracking-wide text-gray-300 md:text-left md:text-lg">
                        I'm a CS student who enjoys building things with code —
                        especially when it involves{" "}
                        <span className="font-medium text-white">
                            algorithms
                        </span>
                        ,{" "}
                        <span className="font-medium text-white">
                            creativity, optimization
                        </span>
                        , and{" "}
                        <span className="font-medium text-white">
                            real-world problem solving
                        </span>
                        .
                    </p>

                    <p className="font-roboto mb-5 leading-relaxed tracking-wide text-gray-300 md:text-left md:text-lg">
                        Lately, I’ve been exploring{" "}
                        <span className="font-medium text-white">
                            real-time applications
                        </span>
                        , designing{" "}
                        <span className="text-w hite font-medium">
                            smooth and clear UIs
                        </span>{" "}
                        with <code className="text-white">shadcn</code> &{" "}
                        <code className="text-white">Tailwind</code>, and
                        improving my backend stack with{" "}
                        <code className="text-white">Node.js</code> and{" "}
                        <code className="text-white">PostgreSQL</code>.
                    </p>

                    <p className="text-md font-roboto tracking-wide text-gray-400 italic md:text-left">
                        Fun fact: When I’m not coding, I’m probably reading
                        poetry, lost in music, or sketching new side project
                        ideas 🌙🎧
                    </p>
                </div>

                <Memes />
                {/* <img src="/logo.png" ... /> */}
            </div>
        </section>
    );
};

export default About;
