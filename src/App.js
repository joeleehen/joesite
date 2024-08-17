import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import styles from "./output.css";

export default function App() {
    return (
        <main className="bg-gray-800">
            <Navbar />
            <About />
            <Academics />
            <Projects />
            <Skills />
        </main>
    );
}
