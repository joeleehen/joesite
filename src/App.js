import React from "react";
import Title from "./components/Title";
import FadeInSection from "./components/FadeInSection";
import "./components/FadeInSection.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import styles from "./output.css";

const App = () => {
    return (
        <main className="bg-gray-800 pb-72">
            <Navbar />
            <Title />
            <FadeInSection>
                <About />
            </FadeInSection>
            <FadeInSection >
                <Academics />
            </FadeInSection>
            <FadeInSection >
                <Projects />
            </FadeInSection>
            <FadeInSection >
                <Skills />
            </FadeInSection>
        </main>
    );
}

export default App;