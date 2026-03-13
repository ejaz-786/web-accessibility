import { useState } from "react";
import "./form.css";

export default function FormIssue() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            setError("Email is required");
        } else {
            setError("");
            alert("Form submitted");
        }
    }

    return (

        <form onSubmit={handleSubmit}>

            <label>Email</label>

            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button type="submit">Submit</button>

        </form>

    )

}