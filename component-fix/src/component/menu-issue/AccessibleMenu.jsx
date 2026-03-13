import { useState, useRef } from "react";
import "./menu.css";

export default function AccessibleMenu() {

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const itemRefs = useRef([]);

    const items = ["Home", "Profile", "Settings"];

    const handleButtonKeyDown = (e) => {

        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActiveIndex(0);

            setTimeout(() => {
                itemRefs.current[0]?.focus();
            }, 0);
        }

        // if (e.key === "ArrowDown") {
        //     e.preventDefault();
        //     setOpen(true);
        //     setActiveIndex(0);

        //     setTimeout(() => {
        //         itemRefs.current[0]?.focus();
        //     }, 0);
        // }
    };

    const handleItemKeyDown = (e, index) => {

        const lastIndex = items.length - 1;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = index === lastIndex ? 0 : index + 1;
            itemRefs.current[next].focus();
            setActiveIndex(next);
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev = index === 0 ? lastIndex : index - 1;
            itemRefs.current[prev].focus();
            setActiveIndex(prev);
        }

        if (e.key === "Escape") {
            setOpen(false);
        }

    };

    return (
        <div className="menu">

            <div
                className="menu-button"
                role="button"
                tabIndex="0"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                onKeyDown={handleButtonKeyDown}
            >
                Menu
            </div>

            {open && (

                <div
                    className="menu-list"
                    role="menu"
                >

                    {items.map((item, index) => (

                        <div
                            key={index}
                            role="menuitem"
                            tabIndex="-1"
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`menu-item ${activeIndex === index ? "active" : ""
                                }`}
                            onKeyDown={(e) => handleItemKeyDown(e, index)}
                        >
                            {item}
                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}