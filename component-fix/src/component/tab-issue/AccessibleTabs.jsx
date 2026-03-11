import { useState, useRef } from "react";
import "./tab.css";

export default function AccessibleTabs() {

    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef([]);

    const tabs = [
        { label: "Home", content: "Home content here" },
        { label: "Profile", content: "Profile content here" },
        { label: "Settings", content: "Settings content here" }
    ];

    const handleKeyDown = (e, index) => {

        const lastIndex = tabs.length - 1;

        if (e.key === "ArrowRight") {
            e.preventDefault();
            const next = index === lastIndex ? 0 : index + 1;
            tabRefs.current[next].focus();
            setActiveTab(next);
        }

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            const prev = index === 0 ? lastIndex : index - 1;
            tabRefs.current[prev].focus();
            setActiveTab(prev);
        }

        if (e.key === "Home") {
            e.preventDefault();
            tabRefs.current[0].focus();
            setActiveTab(0);
        }

        if (e.key === "End") {
            e.preventDefault();
            tabRefs.current[lastIndex].focus();
            setActiveTab(lastIndex);
        }

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActiveTab(index);
        }
    };

    return (
        <div className="tabs">

            <div role="tablist" className="tab-list">

                {tabs.map((tab, index) => (

                    <div
                        key={index}
                        role="tab"
                        tabIndex={activeTab === index ? 0 : -1}
                        aria-selected={activeTab === index}
                        aria-controls={`panel-${index}`}
                        id={`tab-${index}`}
                        ref={(el) => (tabRefs.current[index] = el)}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                        {tab.label}
                    </div>

                ))}

            </div>

            {tabs.map((tab, index) => (

                activeTab === index && (
                    <div
                        key={index}
                        role="tabpanel"
                        id={`panel-${index}`}
                        aria-labelledby={`tab-${index}`}
                        className="tab-panel"
                    >
                        {tab.content}
                    </div>
                )

            ))}

        </div>
    );
}