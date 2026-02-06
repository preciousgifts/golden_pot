function openModal(size) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const buttonContainer = document.getElementById("buttonContainer");
  const responseContainer = document.getElementById("responseContainer");
  const closeBtn = document.getElementById("closeBtn");

  // Reset the modal
  buttonContainer.style.display = "flex";
  responseContainer.innerHTML = "";
  closeBtn.style.display = "none";

  // Set modal content
  modalTitle.textContent = "Would you be my Valentine, Similoluwa? 💝";
  modalMessage.textContent =
    "Before we reveal the price, answer this special question...";

  modal.classList.add("show");
}

function respondYes() {
  const buttonContainer = document.getElementById("buttonContainer");
  const responseContainer = document.getElementById("responseContainer");
  const closeBtn = document.getElementById("closeBtn");

  buttonContainer.style.display = "none";
  responseContainer.innerHTML =
    '<div class="response-message love-message">💕 I love you 💕</div>';
  closeBtn.style.display = "block";
}

function respondNo() {
  const buttonContainer = document.getElementById("buttonContainer");
  const responseContainer = document.getElementById("responseContainer");
  const closeBtn = document.getElementById("closeBtn");

  buttonContainer.style.display = "none";
  responseContainer.innerHTML =
    '<div class="response-message reject-message">⛔ We don\'t do that here ⛔</div>';
  closeBtn.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
}

// Close modal when clicking outside
const modal = document.getElementById("modal");
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
