import { useState } from "react";
import "./radio.css";

export default function RadioIssue() {

    const [selected, setSelected] = useState("");

    const options = ["Male", "Female", "Other"];
    // const [selected, setSelected] = useState("small");

    // const handleChange = (e) => setSelected(e.target.value);

    return (

        <div className="radio-group">

            {options.map((item, index) => (
                <div
                    key={index}
                    className={`radio ${selected === item ? "active" : ""}`}
                    onClick={() => setSelected(item)}
                >
                    {item}
                </div>
            ))}

            {/* <fieldset>
                <legend>Select Pizza Size</legend>

                <label>
                    <input
                        type="radio"
                        name="pizza-size"
                        value="small"
                        checked={selected === "small"}
                        onChange={handleChange}
                    />
                    Small
                </label>

                <label>
                    <input
                        type="radio"
                        name="pizza-size"
                        value="medium"
                        checked={selected === "medium"}
                        onChange={handleChange}
                    />
                    Medium
                </label>
            </fieldset> */}

        </div>

    )

}