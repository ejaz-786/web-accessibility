import { useState } from "react";
import "./dropdown.css";

export default function DropdownIssue() {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select option");

    const options = ["Apple", "Banana", "Mango"];

    return (
        <div className="dropdown">

            <   div
                className="dropdown-button"
                onClick={() => setOpen(!open)}
            >
                {selected}
            </div>

            {open && (
                <div className="dropdown-menu">

                    {options.map((item, index) => (
                        <div
                            key={index}
                            className="option"
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