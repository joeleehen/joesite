import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
    <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                    joeylhendrix@gmail.com
                </a>
            </div>
            <form
                netlify
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium font-mono">
                    Hire Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Lorem ipsum dolor sit amet consectetur blah bla blah
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-300 rounded text-lg">
                    Submit
                </button>
            </form>
        </div>
    </section>
    );
}
