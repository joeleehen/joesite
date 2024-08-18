import { BoltIcon } from "@heroicons/react/24/outline";
import React from "react"; 
import { skills } from "../data.js"

export default function Skills() {
    return (
    <section id="skills">
        <div className="container mx-auto flex px-10 py-20 flex-col items-start">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 mr-0 pr-0 font-medium text-white">
                <BoltIcon className="text-purple-300 size-10 inline-block mr-4 mb-1"/>
                skills
            </h1>
            <p className="ml-2 mb-8 leading-relaxed font-mono text-gray-400">
                I've been building my knowledge of the following technologies through formal education and personal initiative:
            </p>
            <div className="flex flex-wrap">
                {skills.map((skill) => (
                <span className="font-mono text-sm text-gray-800 bg-purple-300 px-3 py-1 border-purple-300 rounded-xl mx-2 mb-4">{skill}</span>
                ))}
            </div>
        </div>
    </section>
    )
}
