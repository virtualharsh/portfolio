import { div } from 'motion/react-client';
import React from 'react'

const Footer = () =>{
    return (
        <div>
            {/* Footer */}
            <footer className="mt-10 border-t border-white/10 bg-black/80 py-6 text-center text-sm text-gray-400 backdrop-blur-md">
                <p className='text-lg'>
                    &copy; {new Date().getFullYear()} Harsh Sonegra. All rights
                    reserved.
                </p>
                <div className="mt-2 flex justify-center gap-4 text-xl">
                    <a
                        href="https://www.linkedin.com/in/harshsonegra/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        <i className="ri-linkedin-fill" />
                    </a>
                    <a
                        href="mailto:harshsonegrahere@gmail.com"
                        className="transition-colors hover:text-white"
                    >
                        <i className="ri-mail-line" />
                    </a>
                    <a
                        href="https://x.com/ayyhaay_harsh"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        <i className="ri-twitter-x-line" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;