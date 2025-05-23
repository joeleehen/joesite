import React from "react";
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import FadeInSection from "./components/FadeInSection"
import "./components/FadeInSection.css"
import About from "./components/About"
import Academics from "./components/Academics"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

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
