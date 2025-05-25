const playButton = document.querySelector(
  ".gallery__play-button"
) as HTMLButtonElement;
const modal = document.getElementById("videoModal") as HTMLDivElement;
const closeModalBtn = document.getElementById(
  "closeModal"
) as HTMLButtonElement;
const modalOverlay = document.getElementById("modalOverlay") as HTMLDivElement;
const iframe = document.getElementById("youtubeFrame") as HTMLIFrameElement;

function openModal() {
  modal.classList.remove("modal--hidden");
  const videoURL = iframe.dataset.src;
  if (videoURL) {
    iframe.src = videoURL;
  }
}

function closeModal() {
  modal.classList.add("modal--hidden");
  iframe.removeAttribute("src");
}

playButton.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
