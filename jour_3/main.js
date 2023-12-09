const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const sectionRotation = document.getElementById("pas-de-rotation")
const menuDeOuf = document.getElementById("menu-ouf")


menuOpen.addEventListener("click", function (e) {
    menuOpen.classList.add("menu-closed");
    menuClose.classList.add("menu-open");
    menuDeOuf.classList.add("activation");
    menuClose.classList.remove("menu-closed");
    sectionRotation.classList.add("la-rotation");
});

menuClose.addEventListener("click", function (e) {
    menuOpen.classList.add("menu-open");
    menuClose.classList.add("menu-closed");
    menuDeOuf.classList.remove("activation");
    menuOpen.classList.remove("menu-closed");
    sectionRotation.classList.remove("la-rotation");
});