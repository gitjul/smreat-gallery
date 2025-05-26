const playButton = document.querySelector(
  ".gallery__play-button"
) as HTMLButtonElement;
const modal = document.getElementById("videoModal") as HTMLDivElement;
const closeModalBtn = document.getElementById(
  "closeModal"
) as HTMLButtonElement;
const modalOverlay = document.getElementById("modalOverlay") as HTMLDivElement;
const iframe = document.getElementById("youtubeFrame") as HTMLIFrameElement;
const body = document.querySelector("body") as HTMLBodyElement;

function openModal() {
  modal.classList.remove("modal--hidden");
  body.classList.add("modal-open");

  const videoURL = iframe.dataset.src;
  if (videoURL) {
    iframe.src = videoURL;
  }
}

function closeModal() {
  modal.classList.add("modal--hidden");
  body.classList.remove("modal-open");
  iframe.removeAttribute("src");
}

playButton.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      "a[href], area[href], input:not([disabled]), select:not([disabled]), " +
        "textarea:not([disabled]), button:not([disabled]), iframe, object, embed, " +
        '[tabindex]:not([tabindex="-1"]), [contenteditable]'
    )
  ).filter((el) => el.offsetParent !== null); // exclude hidden
}

document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("modal--hidden")) return;

  // ESC to close
  if (e.key === "Escape") {
    closeModal();
    return;
  }

  // TAB key trapping
  if (e.key === "Tab") {
    const focusables = getFocusableElements(modal);
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});
