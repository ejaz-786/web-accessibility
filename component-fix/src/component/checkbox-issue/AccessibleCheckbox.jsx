import { useState, useRef } from "react";
import "./checkbox.css";

export default function AccessibleCheckbox() {

    const options = ["HTML", "CSS", "JavaScript"];
    const [selected, setSelected] = useState([]);

    const refs = useRef([]);

    const toggleOption = (item) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(i => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    }

    const handleKeyDown = (e, index, item) => {

        if (e.key === " ") {
            e.preventDefault();
            toggleOption(item);
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = index === options.length - 1 ? 0 : index + 1;
            refs.current[next].focus();
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev = index === 0 ? options.length - 1 : index - 1;
            refs.current[prev].focus();
        }

    }

    return (

        <div
            role="group"
            aria-label="Skills"
            className="checkbox-group"
        >

            {options.map((item, index) => (
                <div
                    key={index}
                    role="checkbox"
                    aria-checked={selected.includes(item)}
                    tabIndex="0"
                    ref={(el) => refs.current[index] = el}
                    className={`checkbox ${selected.includes(item) ? "active" : ""}`}
                    onClick={() => toggleOption(item)}
                    onKeyDown={(e) => handleKeyDown(e, index, item)}
                >

                    {item}

                </div>
            ))}

        </div>

    )

}