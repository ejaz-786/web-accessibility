import { useState, useRef } from "react";
import "./form.css";

export default function AccessibleForm() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            setError("Email is required");

            setTimeout(() => {
                inputRef.current.focus();
            }, 0)

        } else {
            setError("");
            alert("Form submitted");
        }

    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>

            <input
                id="email"
                ref={inputRef}
                type="text"
                value={email}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "email-error" : undefined}
                onChange={(e) => setEmail(e.target.value)}
            />

            {error && (

                <p
                    id="email-error"
                    className="error"
                    role="alert"
                >
                    {error}
                </p>

            )}

            <button type="submit">Submit</button>

        </form>

    )

}