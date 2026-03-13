import { useState } from "react";
import "./menu.css";

export default function MenuIssue() {

    const [open, setOpen] = useState(false);

    return (
        <div className="menu">

            <div
                className="menu-button"
                onClick={() => setOpen(!open)}
            >
                Menu
            </div>

            {open && (
                <div className="menu-list">

                    <div className="menu-item">Home</div>
                    <div className="menu-item">Profile</div>
                    <div className="menu-item">Settings</div>

                </div>
            )}

        </div>
    );
}