import { CubeIcon, CodeBracketIcon, RocketLaunchIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { projects } from "../data";

export default function Projects() {
    return(
    <section id="projects">
        <div className="container px-5 py-10 mx-auto">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 mr-0 pr-0 font-medium text-white">
                <CubeIcon className="text-purple-300 size-10 inline-block mr-4 mb-1" />
                projects
            </h1>
        </div>
        <div className="flex justify-center md:space-x-10 flex-wrap px-5 mx-auto auto mt-4">
            {projects.map((project) => (
            <div className="p-4 max-w-lg md:w-1/2 w-full">
                <div className="h-full bg-gray-700 border border-gray-700 p-8 rounded-xl hover:bg-gray-600 hover:border-purple-300 duration-200">
                    <div>
                        <CodeBracketIcon className="text-purple-300 size-7 inline-block mr-4 mb-1" />
                        <a
                            href={project.link}
                            target="_blank"
                            className="float-right inline-block">
                            <RocketLaunchIcon className="size-5 md:size-7 text-gray-400"/>
                        </a>
                        <a
                            href={project.link2}
                            target="_blank"
                            className="float-right inline-block">
                            <GlobeAmericasIcon className="size-5 md:size-7 text-gray-400" />
                        </a>
                    </div>
                    <span className="flex-grow flex flex-col">
                        <span className="font-mono font-bold font-xl text-white pt-2">
                            {project.title}
                        </span>
                        <span className="font-mono text-gray-500 text-sm pb-2">
                            {project.subtitle}
                        </span>
                    </span>
                    <p className="font-mono text-gray-300 leading-relaxed mb-6">{project.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
    )
}
