import React, { useState, useEffect } from "react";

export default function Leftlinks() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 769);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="inline-block">
            {isDesktop ? (
            <>
                <a className="font-mono font-medium text-gray-400 pt-0.5 mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xs">
                        Joseph Hendrix
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-purple-300 flex flex-wrap items-center text-base justify-center">
                    <a href="#academics" className="mr-5 text-xs text-gray-400 hover:text-purple-300">Academics</a>
                    <a href="#projects" className="mr-5 text-xs text-gray-400 hover:text-purple-300">Projects</a>
                </nav>
            </>
            ) : (
            <></>
            )}
        </div>
    )
}
