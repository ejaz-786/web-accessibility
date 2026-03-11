import { useState, useRef, useEffect } from "react";
import "./modal.css";

export default function AccessibleMoal() {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef(null);
  const modalRef = useRef(null);

  // Focus modal when opened
  useEffect(() => {
    if (isOpen) {
    //   modalRef.current.focus();
          const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusable[0];
      firstElement.focus();
    }
  }, [isOpen]);

  // Close modal and return focus
  const closeModal = () => {
    setIsOpen(false);
    openButtonRef.current.focus();
  };

  // ESC close support
  const handleKeyDown = (e) => {
     const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];    
    if (e.key === "Escape") {
      closeModal();
    }

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  return (
    <div className="app">
      <h1>Accessible Modal Example</h1>

      <button
        ref={openButtonRef}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="overlay">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex="-1"
            ref={modalRef}
            onKeyDown={handleKeyDown}
          >
            <h2 id="modal-title">Delete Account</h2>

            <p>Are you sure you want to delete this account?</p>

            <div className="actions">
              <button>Confirm</button>

              <button onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}