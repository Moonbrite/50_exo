const circle = document.getElementsByClassName('circle');
const traits = document.getElementsByClassName("basic");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let nbr = 1;

btnNext.addEventListener("click", () => {
    if (nbr < circle.length) {
        traits[nbr - 1].classList.add("basic-blue");
        circle[nbr].classList.add("blue-circle");
        nbr++;
        if (nbr == circle.length) {
            btnNext.classList.add("not");
            btnNext.classList.remove("yes");
        } else if (nbr >= 2 && nbr < circle.length) {
            btnPrev.classList.add("yes");
            btnPrev.classList.remove("not");
        }
    }
});

btnPrev.addEventListener("click", () => {
    if (nbr > 1) {
        nbr--;
        traits[nbr - 1].classList.remove("basic-blue");
        circle[nbr].classList.remove("blue-circle");
        if (nbr < circle.length) {
            btnNext.classList.add("yes");
            btnNext.classList.remove("not");
        }
        if (nbr == 1) {
            btnPrev.classList.add("not");
            btnPrev.classList.remove("yes");
        }
    }
});