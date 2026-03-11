import { useState, useRef } from "react";
import "./dropdown.css";

export default function AccessibleDropdown() {

    const options = ["Apple", "Banana", "Mango"];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select option");
    const [activeIndex, setActiveIndex] = useState(-1);

    const listRef = useRef(null);

    const handleKeyDown = (e) => {

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActiveIndex((prev) =>
                prev < options.length - 1 ? prev + 1 : 0
            );
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
            setActiveIndex((prev) =>
                prev > 0 ? prev - 1 : options.length - 1
            );
        }

        if (e.key === "Enter" && activeIndex >= 0) {
            setSelected(options[activeIndex]);
            setOpen(false);
        }

        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    return (
        <div className="dropdown">

            <div
                role="combobox"
                tabIndex="0"
                aria-expanded={open}
                aria-controls="dropdown-list"
                aria-activedescendant={
                    activeIndex >= 0 ? `option-${activeIndex}` : undefined
                }
                className="dropdown-button"
                onClick={() => setOpen(!open)}
                onKeyDown={handleKeyDown}
            >
                {selected}
            </div>

            {open && (
                <div
                    id="dropdown-list"
                    role="listbox"
                    ref={listRef}
                    className="dropdown-menu"
                >

                    {options.map((item, index) => (
                        <div
                            id={`option-${index}`}
                            role="option"
                            aria-selected={selected === item}
                            key={index}
                            className={`option ${activeIndex === index ? "active" : ""
                                }`}
                            onClick={() => {
                                setSelected(item);
                                setOpen(false);
                            }}
                        >
                            {item}
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}