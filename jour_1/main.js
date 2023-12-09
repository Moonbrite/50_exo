

const image = document.getElementsByClassName("carte");

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
        for (let j = 0; j < image.length; j++) {
            image[j].classList.remove("actif");
        }
        image[i].classList.add("actif");
    });
}