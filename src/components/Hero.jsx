import { AnimateSvg } from "./AnimateSvg";
import { Button } from "./Button";

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-20 md:gap-60 overflow-x-hidden pb-20 md:flex-row">
            
            <div className="flex flex-col items-center gap-4 md:max-w-xl md:items-start lg:max-w-2xl">
                <h1 className="font-heading text-4xl font-bold tracking-wider md:text-6xl">
                    Harsh Sonegra
                </h1>

                <p className="font-primary hidden text-center text-2xl tracking-wide md:text-left lg:block lg:max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate et maiores numquam delectus nulla ipsum laborum
                    assumenda corporis quas ad.
                </p>

                <div className="flex gap-3">
                    <Button
                        variant="primary"
                        size="sm"
                        icon="ri-arrow-right-up-line"
                        className="w-max tracking-wide"
                    >
                        Resume
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        icon="ri-arrow-right-up-line"
                        className="w-max tracking-wide"
                    >
                        Linkedin
                    </Button>
                </div>
            </div>

            {/* Optional image */}
            <div className="w-full h-max max-w-md">
                <figure>
                    <img
                        src="/coding.svg"
                        alt="Coding theme"
                        className="w-full object-contain"
                    />
                    <figcaption className="hidden">
                        Photo from <a href="https://www.vecteezy.com/">vecteezy.com</a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
