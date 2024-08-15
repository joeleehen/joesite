import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { courses } from "../data.js";

export default function Academics() {
    return (
    <section id="academics">
        <div className="container mx-auto flex px-10 py-20 flex-col items-start">
            <h1 className="font-mono sm:text-4xl text-3xl mb-4 mr-0 pr-0 font-medium text-white">
                <AcademicCapIcon className="text-purple-300 size-10 inline-block mr-4 mb-1" />
                academics
            </h1>
            <p className="ml-2 mb-8 leading-relaxed font-mono text-gray-400">
                
                In college, I focused on econometrics, regression analysis, and data visualization.
                I have a broad education in various computer science disciplines, and I plan to further
                my education in graduate school.
            </p>
            <h2 className="font-mono text-xl text-white">
                Relevant Coursework
            </h2>
            <div className="m-4">
                {courses.map((course) => (
                <div>
                    <h2 className="font-mono text-xl text-purple-300">
                        {course.name}
                    </h2>
                    <p className="text-l text-gray-500 mb-4">
                        {course.description}
                    </p>
                </div>
                ))}
            </div>
        </div>
    </section>
    )
}
