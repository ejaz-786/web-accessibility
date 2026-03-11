import { useState } from "react";
import "./accordian.css";

export default function AccessibleAccrordian() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "What is React?", content: "React is a JavaScript UI library." },
    { title: "What is Accessibility?", content: "Accessibility makes websites usable for everyone." },
    { title: "What is WCAG?", content: "WCAG defines accessibility guidelines." }
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="accordion">
      <h1>FAQ</h1>

      {data.map((item, index) => (
        <div className="item" key={index}>

          <h3>
            <button
              className="accordion-button"
              aria-expanded={openIndex === index}
              aria-controls={`panel-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </button>
          </h3>

          {openIndex === index && (
            <div
              id={`panel-${index}`}
              role="region"
              className="content"
            >
              {item.content}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}