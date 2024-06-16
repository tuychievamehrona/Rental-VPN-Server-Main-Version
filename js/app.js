/*
1. Lang
2. Theme
3. Rounded Text
4. Fixed Header
5. Logo Scroll
6. Nav Links Active
7. Burger
*/



/* 1. Lang */
const enLangButton = document.querySelector("#enLangButton");
const ruLangButton = document.querySelector("#ruLangButton");

const enLangTexts = document.querySelectorAll("#enLangText");
const ruLangTexts = document.querySelectorAll("#ruLangText");


enLangButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "ru");

    ruLangButton.classList.add("active");
    enLangButton.classList.remove("active");

    for (let i = 0; i < enLangTexts.length; i++) {
        let enLangText = enLangTexts[i];
        let ruLangText = ruLangTexts[i];

        enLangText.classList.remove("active");
        ruLangText.classList.add("active");
    }
});


ruLangButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "en");

    enLangButton.classList.add("active");
    ruLangButton.classList.remove("active");

    for (let i = 0; i < enLangTexts.length; i++) {
        let enLangText = enLangTexts[i];
        let ruLangText = ruLangTexts[i];

        enLangText.classList.add("active");
        ruLangText.classList.remove("active");
    }
});


ruLangButton.click();



/* 2. Theme */
const themeLight = document.querySelector("#themeLight");
const themeDark = document.querySelector("#themeDark");


function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}


themeLight.addEventListener("click", (event) => {
    event.preventDefault();

    if (!themeLight.classList.contains("active")) {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    } else {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    }
});


themeDark.addEventListener("click", (event) => {
    event.preventDefault();

    if (!themeDark.classList.contains("active")) {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    } else {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    }
});



/* 3. Rounded Text */
new CircleType(document.querySelector(".home__slogan")).dir(-1).radius(600);



/* 4. Fixed Header */
const header = document.querySelector("#header");


window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});



/* 5. Logo Scroll */
const logo = document.querySelector("#logo");
const links = document.querySelectorAll(".nav__link");

logo.addEventListener("click", event => {
    event.preventDefault();

    links.forEach(link => {
        link.classList.remove("active");
    });

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});



/* 6. Nav Links Active */
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => {
            link.classList.remove("active");
        });

        link.classList.add("active");
    });
});



/* 7. Burger */
const nav = document.querySelector("#nav");
const burger = document.querySelector("#burger");


burger.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
        burger.classList.add("active");
    } else {
        nav.classList.remove("active");
        burger.classList.remove("active");
    }
});
