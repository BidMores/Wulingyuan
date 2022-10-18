const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const img = document.querySelectorAll(".img-gallery img");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

img.forEach((e) => {
    let rect = e.getBoundingClientRect();

    e.dataset.width = rect.width;

    e.addEventListener("pointermove", (el) => {
        let width = parseInt(el.target.dataset.width) / 2;
        let height = parseInt(el.target.dataset.width) / 2;

        let yAngle = (el.offsetY / 10) * (el.offsetY > width ? -1 : 1);
        let xAngle = (el.offsetX / 10) * (el.offsetX > width ? -1 : 1);

        console.log(el.offsetX > width);

        el.target.style.setProperty("--angleX", `${xAngle}deg`);
        el.target.style.setProperty("--angleY", `${yAngle}deg`);
    });
});
