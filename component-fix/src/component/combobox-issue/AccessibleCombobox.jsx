import { useState, useRef, useEffect } from "react";
import "./combobox.css";

export default function AccessibleCombobox() {
  const options = ["India", "USA", "Japan", "Germany", "Canada"];

  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(options);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef(null);

  // Filter logic
  useEffect(() => {
    const result = options.filter((opt) =>
      opt.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFiltered(result);
    setActiveIndex(result.length > 0 ? 0 : -1);
  }, [inputValue, options]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectOption(filtered[activeIndex]);
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const selectOption = (value) => {
    setInputValue(value);
    setOpen(false);
  };

  return (
    <div className="combo-container">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={open}
        aria-controls="listbox"
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `option-${activeIndex}` : undefined
        }
        className="combo-input"
        placeholder="Select country..."
      />

      {open && filtered.length > 0 && (
        <ul role="listbox" id="listbox" className="combo-list">
          {filtered.map((opt, index) => (
            <li
              key={opt}
              id={`option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`combo-option ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseDown={() => selectOption(opt)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
