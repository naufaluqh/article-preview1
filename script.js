// Memilih elemen yang dibutuhkan
const shareContainer = document.querySelector(".share-container");
const shareButtons = document.querySelectorAll(".btn-share");
const shareOptions = shareContainer.querySelector(".share-options");
const footer = document.querySelector(".footer");
const footerToggle = document.querySelector(".footer-toogle");

// Fungsi untuk menampilkan opsi share di tampilan desktop
function toggleShareOptionsDesktop() {
  shareOptions.style.display =
    shareOptions.style.display === "flex" ? "none" : "flex";
}

// Fungsi untuk menukar tampilan footer di tampilan mobile
function toggleFooterMobile() {
  if (footer.style.display !== "none") {
    footer.style.display = "none";
    footerToggle.style.display = "flex";
  } else {
    footer.style.display = "flex";
    footerToggle.style.display = "none";
  }
}

// Menambahkan event listener pada setiap tombol share
shareButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah bubbling event

    if (window.innerWidth > 767) {
      toggleShareOptionsDesktop();
    } else {
      toggleFooterMobile();
    }
  });
});

// Menutup opsi share ketika klik di luar kontainer di tampilan desktop
document.addEventListener("click", (event) => {
  if (!shareContainer.contains(event.target) && window.innerWidth > 767) {
    shareOptions.style.display = "none";
  }
});
