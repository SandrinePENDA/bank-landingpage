//Burger opens/closes
let burger = document.getElementById("burger");

burger.addEventListener("click", toggleBurger);

function toggleBurger() {
    let menuMobile = document.getElementById("mobileMenu");
    if (burger.getAttribute("aria-expanded") === "false") {
        burger.setAttribute("aria-expanded", "true");
        burger.classList.add("is-open");

        menuMobile.classList.remove("is-closed");
        menuMobile.classList.add("is-open");
    } else {
        burger.setAttribute("aria-expanded", "false");
        burger.classList.remove("is-open");

        menuMobile.classList.remove("is-open");
        menuMobile.classList.add("is-closed");
    }
}


