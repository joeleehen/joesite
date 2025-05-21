import React from "react";
import Navbar from "./components/Navbar.tsx"
import Title from "./components/Title.tsx"
import FadeInSection from "./components/FadeInSection.tsx"
import "./components/FadeInSection.css"
import About from "./components/About.tsx"
import Academics from "./components/Academics.tsx"
import Projects from "./components/Projects.tsx"
import Skills from "./components/Skills.tsx"

const App = () => {
    return (
        <main className="bg-gray-800 pb-72">
            <Navbar />
            <Title />
            <FadeInSection>
                <About />
            </FadeInSection>
            <FadeInSection>
                <Academics />
            </FadeInSection>
            <FadeInSection>
                <Projects />
            </FadeInSection>
            <FadeInSection>
                <Skills />
            </FadeInSection>
        </main>
    )
}

export default App
