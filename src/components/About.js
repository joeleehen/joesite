import Typewriter from "../Typewriter";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function About() {
    return (
    <section id="about">
        <div className= "container mx-auto flex sm:py-40 sm:px-40 px-5 py-10 flex-col items-center">
            <h1 className="font-mono sm:text-4xl text-2xl mb-4 mr-0 pr-0 font-medium text-white">
                hi, <Typewriter text="i'm joseph" delay={100} /><span className="font-mono text-purple-300 pl-0 ml-1 animate-ping">|</span>
                <br/>
            </h1>
            <h2 className="font-mono sm:text-2xl text-1xl mb-4 font-medium text-gray-400">
                I like to make things
            </h2>
            <p className="mb-8 leading-relaxed font-mono text-gray-400 text-center">
                I'm a junior software developer from Bryan, Texas. I recently graduated from The
                University of Texas at Austin with a Bachelor's of Science in Economics and a 
                certificate in Computer Science. Currently, I'm learning everything I can about
                different aspects of software development.
            </p>
            <div>
                <a
                    href="mailto:joeylhendrix@gmail.com"
                    className="text-purple-300 border border-purple-300 rounded-lg p-4 hover:bg-gray-700 duration-300">
                    <EnvelopeIcon className="size-6 inline-block mr-4" />contact me
                </a>
            </div>
        </div>
    </section>
    );
}
