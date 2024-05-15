const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-large-line");
    if(isOpen){
        navLinks.classList.add("close");
        navLinks.addEventListener(
            "animationend", (e) => {
                navLinks.classList.remove("open");
                navLinks.classList.remove("close")
            }, 
            { once: true }
        );
    } else {
        navLinks.classList.add("open");
    }
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-container .section-subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-container .scroll-btn", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-container .header-socials", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
});