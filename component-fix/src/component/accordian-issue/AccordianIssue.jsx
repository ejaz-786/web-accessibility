import { useRef, useState } from "react";
import "./accordian.css";

export default function AccordianIssue() {
  const [openIndex, setOpenIndex] = useState(null);
  const headersRef = useRef([]);

  const toggleAccordion = (index) => {
    // console.log("index",index);
    // console.log("openIndex",openIndex)
    // if (openIndex === index) {
    //   setOpenIndex(null);
    // } else {
    //   setOpenIndex(index);
    // }

    setOpenIndex(openIndex === index ? null : index);
  };

  // console.log("baharIndex",openIndex)

  const data = [
    { title: "What is React?", content: "React is a JavaScript UI library." },
    { title: "What is Accessibility?", content: "Accessibility makes websites usable for everyone." },
    { title: "What is WCAG?", content: "WCAG defines accessibility guidelines." }
  ];

  const handleKeyDown = (e, index) => {
    const lastIndex = data.length - 1;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = index === lastIndex ? 0 : index + 1;
      headersRef.current[next].focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = index === 0 ? lastIndex : index - 1;
      headersRef.current[prev].focus();
    }

    if (e.key === "Home") {
      e.preventDefault();
      headersRef.current[0].focus();
    }

    if (e.key === "End") {
      e.preventDefault();
      headersRef.current[lastIndex].focus();
    }
  };

  return (
    <div className="accordion">
      <h1>FAQ</h1>

      {data.map((item, index) => (
        <div className="item" key={index}>
          <div
            className="header"
            ref={(el) => headersRef.current[index] = el}
            onClick={() => toggleAccordion(index)}
            role="button"
            tabIndex="0"
            aria-expanded={openIndex === index}
            aria-controls={`panel-${index}`}
            // onClick={() => toggleAccordion(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          // className="header"
          >
            {item.title}
          </div>

          {openIndex === index && (
            <div className="content"
            // id={`panel-${index}`}
            //   role="region"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}