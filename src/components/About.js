import Typewriter from "../Typewriter";

export default function About() {
    return (
    <section id="about">
        <div className= "container mx-auto flex px-10 py-20 flex-col items-center">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 font-medium text-white">
                hi, <Typewriter text="i'm joseph" delay={100} /> <span className="font-mono text-purple-300 animate-ping">|</span>
                <br/>
            </h1>
            <h2 className="font-mono sm:text-2xl text-1xl mb-4 font-medium text-gray-400">
                I like to make things
            </h2>
            <p className="mb-8 leading-relaxed font-mono text-gray-400">
                I'm a junior software developer from Bryan, Texas. I recently graduated from The
                University of Texas at Austin with a Bachelor's of Science in Economics and a 
                certificate in Computer Science. Currently, I'm learning everything I can about
                different aspects of software development to discover where I fit and what I like
                to make.
            </p>
        </div>
    </section>
    );
}
