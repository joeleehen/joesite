import { useState, useEffect } from "react";
import { useRef } from "react";
import { PropsWithChildren } from "react";

const FadeInSection = (props: PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState(false);

    const domRef = useRef<any>(null);

    const options = {
        root: null,
        rootMargin: "200% 0px -25% 0px",
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => 
                entry.isIntersecting ? setIsVisible(entry.isIntersecting) : {});
        }, options);
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div 
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;
