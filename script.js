/* ======================================
   KAZEEM WEB STUDIO V2
   FINAL SCRIPT.JS
====================================== */

/* ==========================
   ELEMENTS
========================== */

const navbar = document.querySelector("header");
const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const glow = document.querySelector(".cursor-glow");

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1000);
});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/* ==========================
   MOBILE MENU
========================== */

function closeMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    closeMenu();
  });
});

/* ==========================
   SCROLL REVEAL
========================== */

const revealSections = document.querySelectorAll(
  ".hero, .about, .services, .portfolio, .pricing, .faq, .contact"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    }
  });
}, {
  threshold: 0.15
});

revealSections.forEach(section => revealObserver.observe(section));

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;

    if (counter.dataset.started) return;

    counter.dataset.started = "true";

    const target = Number(counter.dataset.target);
    const duration = 1200;
    const stepTime = duration / target;

    let value = 0;

    const timer = setInterval(() => {

      value++;
      counter.textContent = value;

      if (value >= target) {
        clearInterval(timer);
        counter.textContent = target;
      }

    }, stepTime);

  });
}, {
  threshold: 0.6
});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================
   CURSOR GLOW
========================== */

if (window.innerWidth > 900) {

  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

} else {

  glow.style.display = "none";

}
window.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  glow.style.left = touch.clientX + "px";
  glow.style.top = touch.clientY + "px";
});