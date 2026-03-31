const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

let lastFocusedElement;

openBtn.addEventListener("click", () => {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  closeBtn.focus();
  //   modal.focus();
  //   setTimeout(() => {
  //     closeBtn.focus();
  //   }, 1000);
});

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.hidden = true;
  lastFocusedElement.focus();
}

// ESC key support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

// Focus trap
modal.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusable = modal.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
