import data from "./data.js"

let menuBtn = document.querySelector('.mobile-btn')
let menuLists = document.querySelector('.nav-info')
let cancelIcon = document.querySelector('.closeIcon')
const mainElement = document.querySelector("#main-content")
const title = document.querySelector(".titleText")
const contentBody = document.querySelector(".description")
const imageBg = document.querySelector("#imgCol")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
let index = 0;

menuBtn.addEventListener('click', () => {
    showNav();
})

cancelIcon.addEventListener('click', () => {
    hideNav();
})

function showNav() {
    menuLists.style.width = "100%";
    mainElement.style.background = "rgba(0, 0, 0, 0.5)";
    imageBg.style.backgroundBlendMode = "overlay";
}

function hideNav() {
    menuLists.style.width = "0%";
}

function displayElement(i) {
    imageBg.style.backgroundImage = `url(${data[index].coverImg})`;
    title.textContent = data[index].title;
    contentBody.textContent = data[index].body;
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
document.querySelector('.prevMobile').addEventListener('click', prev);
document.querySelector('.nextMobile').addEventListener('click', next);

function prev() {
    index = index === 0 ? data.length - 1 : index - 1;
    displayElement(index);
}

function next() {
    index = index === data.length - 1 ? 0 : index + 1;
    displayElement(index);
}