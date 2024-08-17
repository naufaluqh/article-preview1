const shareContainer = document.querySelector(".share-container");
const shareButton = shareContainer.querySelector(".btn-share");
const shareOptions = shareContainer.querySelector(".share-options");

shareButton.addEventListener("click", () => {
  shareOptions.style.display =
    shareOptions.style.display === "flex" ? "none" : "flex";
  shareButton.classList.toggle("active");
});

// Menutup opsi share ketika mengklik di luar
document.addEventListener("click", (event) => {
  if (!shareContainer.contains(event.target)) {
    shareOptions.style.display = "none";
    shareButton.classList.remove("active");
  }
});
