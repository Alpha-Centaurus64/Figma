// Gallery filtering functionality
function filterGallery(category = "all") {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
      setTimeout(() => {
        item.style.opacity = "1";
      }, 50);
    } else {
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.display = "none";
      }, 300);
    }
  });
}

function setupCategoryButtons() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterGallery(btn.dataset.category);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Add animation class to gallery items
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.opacity = "0";
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transition = "opacity 0.3s ease-in-out";
    }, 100);
  });
  setupCategoryButtons();
});
