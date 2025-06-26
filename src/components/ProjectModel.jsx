import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ProjectModal = ({ images, currentIndex, onClose, setIndex }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
        else if (e.key === "ArrowRight")
            setIndex((i) => (i + 1) % images.length);
        else if (e.key === "ArrowLeft")
            setIndex((i) => (i - 1 + images.length) % images.length);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIndex((i) => (i + 1) % images.length),
        onSwipedRight: () =>
            setIndex((i) => (i - 1 + images.length) % images.length),
        trackMouse: true,
    });

    return (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-3xl text-white hover:text-red-400"
            >
                <i className="ri-close-line" />
            </button>

            <div
                {...swipeHandlers}
                className="relative w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
            >
                <img
                    src={images[currentIndex]}
                    alt="Unable to load image"
                    className="mx-auto max-h-[90vh] w-full rounded-lg border border-zinc-700 object-contain"
                />
                <button
                    onClick={() =>
                        setIndex((i) => (i - 1 + images.length) % images.length)
                    }
                    className="absolute top-1/2 left-0 -translate-y-1/2 transform px-3 text-3xl text-white hover:text-indigo-400"
                >
                    <i className="ri-arrow-left-s-line" />
                </button>
                <button
                    onClick={() => setIndex((i) => (i + 1) % images.length)}
                    className="absolute top-1/2 right-0 -translate-y-1/2 transform px-3 text-3xl text-white hover:text-indigo-400"
                >
                    <i className="ri-arrow-right-s-line" />
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
