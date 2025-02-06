import React from "react";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import styles from "./output.css";

const App = () => {
    return (
        <main className="bg-gray-800">
            <Navbar />
            <Title />
            <About />
            <Academics />
            <Projects />
            <Skills />
        </main>
    );
}

export default App;