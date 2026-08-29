/* ======================================
   KAZEEM WEB STUDIO
   SCRIPT.JS — PART 1
====================================== */

/* ==========================
   SELECT ELEMENTS
========================== */
const navbar = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-links a");
const navLinks = document.querySelector(".nav-links");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        if(navLinks){
            navLinks.classList.remove("show");
        }
    });
});
/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ==========================
   SCROLL FADE ANIMATION
========================== */

const sections = document.querySelectorAll(
    ".hero, .about, .services, .portfolio, .contact"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-section");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{
    observer.observe(section);
});

/* ==========================
   ACTIVE NAV LINK
========================== */

const pageSections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    let current = "";

    pageSections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
/* ==========================
   ANIMATED COUNTERS (FIXED)
========================== */

const counters = document.querySelectorAll(".counter");

function startCounters() {

    counters.forEach(counter => {

        if (counter.dataset.started) return;

        counter.dataset.started = "true";

        const target = parseInt(counter.dataset.target);
        let count = 0;

        const timer = setInterval(() => {

            count++;
            counter.textContent = count;

            if (count >= target) {
                clearInterval(timer);
                counter.textContent = target;
            }

        }, 300);

    });

}

window.addEventListener("scroll", () => {

    const about = document.querySelector(".about");

    if (about.getBoundingClientRect().top < window.innerHeight - 100) {
        startCounters();
    }

});
startCounters();
/* ==========================
   CURSOR GLOW
========================== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(event)=>{

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});

window.addEventListener("touchmove",(event)=>{

    const touch = event.touches[0];

    glow.style.left = touch.clientX + "px";
    glow.style.top = touch.clientY + "px";

});
/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});
/* ==========================
   PREMIUM MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");

});

closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

}
/* ==========================
   SMOOTH BUTTON SCROLL FIX
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Close mobile menu if it's open
            closeMenu();
        }

    });

});