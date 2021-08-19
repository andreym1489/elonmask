let header = document.querySelector(".header");
let burger = header.querySelector(".burger");
let mobileNav = document.querySelector(".nav-for-mobile__wrapper");

let isBurgerOpen = false;
let addClassesForBurger = () => {
    burger.classList.add("active");
    mobileNav.classList.add("active");
    document.body.classList.add("fixed");
    header.classList.add("shadowOff");
    isBurgerOpen = true;
}
let removeClassesForBurger = () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.classList.remove("fixed");
    header.classList.remove("shadowOff");
    isBurgerOpen = false;
}
let toogleClassesForBurger = () => {
    if(!isBurgerOpen) addClassesForBurger();
    else removeClassesForBurger();
}
burger.addEventListener("click", toogleClassesForBurger);


let links = document.querySelectorAll(".nav__link");

console.log(links);

links.forEach( (link) => {
    link.addEventListener("click", (e) => {
        removeClassesForBurger();
    })
} )