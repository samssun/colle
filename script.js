// Mobile menu toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    const nav = document.querySelector("nav ul");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "100%";
      nav.style.left = "0";
      nav.style.width = "100%";
      nav.style.backgroundColor = "white";
      nav.style.padding = "20px";
      nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
      nav.style.gap = "15px";
    }
  });

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth"
    });

    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").style.display = "none";
    }
  });
});

// CTA button smooth scrolling
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#contact") {
      e.preventDefault();
      const targetElement = document.querySelector("#contact");

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Add active class to nav links on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});