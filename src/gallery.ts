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
