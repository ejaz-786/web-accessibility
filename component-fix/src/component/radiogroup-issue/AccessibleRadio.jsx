import { useState, useRef } from "react";
import "./radio.css";

export default function AccessibleRadio() {

    const options = ["Male", "Female", "Other"];

    const [selected, setSelected] = useState("Male");

    const radioRefs = useRef([]);

    const handleKeyDown = (e, index) => {

        const lastIndex = options.length - 1;

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            const next = index === lastIndex ? 0 : index + 1;
            radioRefs.current[next].focus();
            setSelected(options[next]);
        }

        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            const prev = index === 0 ? lastIndex : index - 1;
            radioRefs.current[prev].focus();
            setSelected(options[prev]);
        }

        if (e.key === " ") {
            e.preventDefault();
            setSelected(options[index]);
        }

    }

    return (

        <div
            role="radiogroup"
            aria-label="Gender"
            className="radio-group"
        >

            {options.map((item, index) => (

                <div
                    key={index}
                    role="radio"
                    aria-checked={selected === item}
                    tabIndex={selected === item ? 0 : -1}
                    ref={(el) => radioRefs.current[index] = el}
                    className={`radio ${selected === item ? "active" : ""}`}
                    onClick={() => setSelected(item)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                >

                    {item}

                </div>

            ))}

        </div>

    )

}