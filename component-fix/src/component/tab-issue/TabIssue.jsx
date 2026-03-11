import { useState } from "react";
import "./tab.css";

export default function TabIssue() {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: "Home", content: "Home content here" },
        { label: "Profile", content: "Profile content here" },
        { label: "Settings", content: "Settings content here" }
    ];

    return (
        <div className="tabs">

            <div className="tab-list">

                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}

            </div>

            <div className="tab-panel">
                {tabs[activeTab].content}
            </div>

        </div>
    );
}