const ROCKET_SVG = "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z";
const GLOBE_SVG = "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418";

interface Link {
    url: string;
    path: string;
}

interface Project {
    title: string;
    subtitle: string;
    description: string;
    links: Link[];
    tech: string[];
}

interface Course {
    name: string;
    description: string;
}

export const projects: Project[] = [
    {
        title: "rsls",
        subtitle: "Command Line Tool",
        description:
            "A command line utility that mirrors ls, but includes colored icons depending on the file type; available on the Arch User Repository",
        links: [
            {
                url: "https://github.com/joeleehen/rsls",
                path: ROCKET_SVG
            },
            {
                url: "https://aur.archlinux.org/packages/rsls-git",
                path: GLOBE_SVG
            },
        ],
        tech: [
            "Rust, ",
            "Bash"
        ]
    },
    {
        title: "imgRecord",
        subtitle: "Web App",
        description:
            "A web app that scans a barcode from a vinyl record sleeve and displays the album art on an Adafruit RGB Matrix",
        links: [
            {
                url: "https://github.com/joeleehen/imgRecord",
                path: ROCKET_SVG
            },
            {
                url: "https://www.youtube.com/watch?v=iDpaxvJ_N3Q&t=61s",
                path: GLOBE_SVG
            },
        ],
        tech: [
            "Python,",
            "Flask,",
            "Javascript,",
            "REST API,",
            "Shell scripting"
        ]
    },
    {
        title: "lee_alg",
        subtitle: "Math Library",
        description:
            "A Rust crate for matrix support and common linear-algebra operations",
        links: [
            {
                url: "https://github.com/joeleehen/lee_alg",
                path: ROCKET_SVG
            },
        ],
        tech: [
            "Rust"
        ]
    },
    {
        title: "acgc_lettercheck",
        subtitle: "Command Line Tool",
        description:
            "My own implementation of the mail grading system used in Animal Crossing for the GameCube, written in C and rendered in GTK 2.",
        links: [
            {
                url: "https://github.com/joeleehen/acgc_lettercheck",
                path: ROCKET_SVG
            },
        ],
        tech: [
            "C,",
            "GTK"
        ]
    }

]

export const courses: Course[] = [
    {
        name: "Software Design",
        description:
            "Object-oriented design of software with an emphasis on data structures and algorithm complexity"
    },
    {
        name: "Software Engineering",
        description:
            "Software engineering life cycle; unit testing, coverage, continuous integration, source control"
    },
    {
        name: "Databases",
        description:
            "Database design, logical modeling, relational/non-relational practial application"
    },
    {
        name: "Web Programming",
        description:
            "Full-stack web development with HTML/CSS, Javascript, PHP"
    },
    {
        name: "Graphics and Visualization",
        description:
            "Basics of two- and three-dimensional graphics systems, modeling, and rendering"
    },
    {
        name: "Time Series Econometrics",
        description:
            "Advanced econometrics with a focus on models and econometric considerations specifically for time series data"
    },
    {
        name: "Causal Inference",
        description:
            "Isolating causal relationship between a predictor and dependent with a focus on experimental design"
    }
]

export const skills: string[] = [
    "R",
    "Python",
    "Stata",
    "Java",
    "SQL",
    "git",
    "Javascript",
    "HTML/CSS",
    "PHP",
    "Rust",
    "React",
    "Docker",
    "C",
]
