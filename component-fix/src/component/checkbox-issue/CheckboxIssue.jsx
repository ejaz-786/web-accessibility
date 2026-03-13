import { useState } from "react";
import "./checkbox.css";

export default function CheckboxIssue() {

    const options = ["HTML", "CSS", "JavaScript"];
    const [selected, setSelected] = useState([]);
    // const [selected, setSelected] = useState({
    //     reading: false,
    //     gaming: false,
    //     coding: false
    // });

    // const handleChange = (e) => {
    //     setSelected({ ...selected, [e.target.name]: e.target.checked });
    // };

    const toggleOption = (item) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(i => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    }

    return (

        <div className="checkbox-group">

            {options.map((item, index) => (
                <div
                    key={index}
                    className={`checkbox ${selected.includes(item) ? "active" : ""}`}
                    onClick={() => toggleOption(item)}
                >
                    {item}
                </div>
            ))}

            {/* <fieldset style={{ border: 'none', padding: 0 }}>
                Legend provides context for the whole group
                <legend style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Select your Hobbies
                </legend>

                {['reading', 'gaming', 'coding'].map((hobby) => (
                    <div key={hobby}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                name={hobby}
                                checked={selected[hobby]}
                                onChange={handleChange}
                            />
                            {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
                        </label>
                    </div>
                ))}
            </fieldset> */}

        </div>



    )

}