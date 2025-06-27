import React, { useState } from "react";
import ProjectModal from "./ProjectModel";
import projects from "../data/projects.json";

const Projects = () => {
    const [activeImages, setActiveImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPreview = (images) => {
        setActiveImages(images);
        setCurrentIndex(0);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="bg-black py-16 text-white">
            <div className="w-full px-6">
                <h2 className="font-primary mb-16 text-center text-5xl font-bold">
                    <span className="underline">Projects</span> 🚀
                </h2>

                <div className="relative mx-auto w-full md:px-22">
                    {/* Optional vertical lines for large screens */}
                    <div className="absolute top-0 left-0 hidden h-full w-0.5 bg-white/30 lg:block" />
                    <div className="absolute top-0 right-0 hidden h-full w-0.5 bg-white/30 lg:block" />

                    {projects.map((project, idx) => {
                        const isRight = idx % 2 === 1;

                        return (
                            <div
                                key={idx}
                                className={`relative mb-12 flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] lg:max-w-5/6 ${
                                    isRight ? "lg:ml-auto" : "lg:mr-auto"
                                }`}
                            >
                                {/* Top Row */}
                                <div className="flex w-full flex-col gap-1 md:flex-row md:justify-between">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4 text-xl">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="GitHub"
                                            className="transition-colors hover:text-indigo-400"
                                        >
                                            <i className="ri-github-line" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Live Preview"
                                            className="transition-colors hover:text-green-400"
                                        >
                                            <i className="ri-external-link-line" />
                                        </a>
                                        <button
                                            onClick={() =>
                                                openPreview(project.images)
                                            }
                                            title="Image Preview"
                                            className="transition-colors hover:text-yellow-400"
                                        >
                                            <i className="ri-eye-line" />
                                        </button>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-200">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm transition-all hover:bg-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <ProjectModal
                    images={activeImages}
                    currentIndex={currentIndex}
                    onClose={() => setIsModalOpen(false)}
                    setIndex={setCurrentIndex}
                />
            )}
        </section>
    );
};

export default Projects;
