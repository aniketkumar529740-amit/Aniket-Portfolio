// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    if (isLight) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});



// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollTopBtn =
    document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



// =========================
// ACTIVE NAV LINK
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop
            &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});



// =========================
// SMOOTH NAVIGATION
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId =
            link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});



// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-card, .stat-box, .timeline-item, .contact-card, .info-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.6s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();



// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});



// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}



// =========================
// CONSOLE BRANDING
// =========================

console.log(
    "%cPortfolio Developed By Aniket Singh",
    "color:#7c3aed;font-size:16px;font-weight:bold;"
);