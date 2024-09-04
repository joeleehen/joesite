import { CubeIcon, CodeBracketIcon, RocketLaunchIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import CardLinks from "./CardLinks";
import TechUsed from "./TechUsed";
import { projects } from "../data";

export default function Projects() {
    return(
    <section id="projects">
        <div className="container mx-auto flex px-10 pt-20 flex-col items-start">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 mr-0 pr-0 font-medium text-white">
                <CubeIcon className="text-purple-300 size-10 inline-block mr-4 mb-1" />
                projects
            </h1>
        </div>
        <div className="container mx-auto flex px-10 pb-20 flex-col md:flex-row">
            {projects.map((project) => (
            <div className="p-4 max-w-lg md:w-1/2 w-full">
                <div className="h-full bg-gray-700 border border-gray-700 p-8 rounded-xl hover:bg-gray-600 hover:border-purple-300 duration-200">
                    <div>
                        {/* <CodeBracketIcon className="text-purple-300 size-7 inline-block mr-4 mb-1" /> */}
                        {/* <a */}
                        {/*     href={project.link} */}
                        {/*     target="_blank" */}
                        {/*     className="float-right inline-block"> */}
                        {/*     <RocketLaunchIcon className="size-5 md:size-7 text-gray-400"/> */}
                        {/* </a> */}
                        {/* <a */}
                        {/*     href={project.link2} */}
                        {/*     target="_blank" */}
                        {/*     className="float-right inline-block"> */}
                        {/*     <GlobeAmericasIcon className="size-5 md:size-7 text-gray-400" /> */}
                        {/* </a> */}
                        <CardLinks links={project.links} />
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
                    <div className="justify-self-end font-mono text-gray-400 text-xs">
                        <TechUsed tools={project.tech} />
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
    )
}
