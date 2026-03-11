import { useState } from "react";
import "./modal.css";

export default function ModalIssue() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>Modal Example</h1>

      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <button>Test1</button>
       <a href="#">Test2</a>

      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Delete Account</h2>

            <p>Are you sure you want to delete this account?</p>

            <div className="actions">
              <button>Confirm</button>
              <button onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}