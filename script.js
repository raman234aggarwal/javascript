// Toggle the Navbar for Mobile View
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const menuItems = document.querySelector(".menu-items");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      menuItems.style.display = "block";
    } else {
      menuItems.style.display = "none";
    }
  });

  // Hide navbar when a menu item is clicked (for single-page navigation)
  menuItems.addEventListener("click", () => {
    checkbox.checked = false;
    menuItems.style.display = "none";
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Animation for Sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Sample animation style for sections (Add to CSS file):
// .show {
//   opacity: 1;
//   transform: translateY(0);
// }
// section {
//   opacity: 0;
//   transform: translateY(20px);
//   transition: all 0.5s ease-out;
// }
