import React, { useState, useEffect } from "react";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import joegrad from "../img/joegrad.jpeg"

const About = () => {
    const [showImage, setShowImage] = useState(window.innerWidth > 769);

    const updateImage = () => {
        setShowImage(window.innerWidth > 769);
    };

    useEffect(() => {
        window.addEventListener("resize", updateImage);
        return () => window.removeEventListener("resize", updateImage);
    });

    return (
    <section id="about">
        <div className="container md:mt-80 mx-auto flex px-10 py-20 flex-col items-start">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 mr-0 pr-0 font-medium text-white">
                <AtSymbolIcon className="text-purple-300 size-10 inline-block mr-4 mb-1" />
                about me
            </h1>
            <div id="blurbAndPic" className="flex flex-row">
                <div className="max-w-1/2">
                    <p className="text-lg ml-2 mb-8 leading-relaxed font-mono text-gray-400">
                        I recently completed an internship at <a href="https://tacc.utexas.edu"><span className="text-purple-300 hover:underline">The Texas Advanced Computing Center</span></a>, where
                        I developed full-stack web interfaces and optimized high performance computing applications 
                        to support research initiatives for the Life Sciences Department.
                    </p>
                    <p className="text-lg ml-2 mb-8 leading-relaxed font-mono text-gray-400">
                        I plan to pursue a Master's in Computer Science and am working on completing the required prerequisite coursework.
                        In the long term, I'm considering a PhD in Computer Science with a focus in quantum computing, but I plan to
                        gain some professional experience before making a final decision.
                    </p>
                    <p className="text-lg ml-2 mb-8 leading-relaxed font-mono text-gray-400">
                        Beyond my professional work, I enjoy reading, playing Dungeons and Dragons, and spending time with my cat, Jones.
                    </p>
                </div>
                <div>
                    {showImage ? (
                        <img src={joegrad} 
                        alt="the ol' mug"
                        className="sm:flex rounded-lg max-w-xs scale-75 -mt-14" />

                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;