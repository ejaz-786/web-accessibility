import { useState } from "react";
import "./tooltip.css";

function TooltipTrigger({ setOpen, children }) {
  return (
    <button
      aria-describedby="tooltip1"
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="tooltip-trigger"
    >
      {children}
    </button>
  );
}

function TooltipContent({ open }) {
  if (!open) return null;

  return (
    <div role="tooltip" id="tooltip1" className="tooltip">
      Password must be 8 characters
    </div>
  );
}

export default function AccessibleTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TooltipTrigger setOpen={setOpen}>Password Info</TooltipTrigger>

      <TooltipContent open={open} />
    </div>
  );
}
