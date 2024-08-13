import Swiper from "swiper";
import { Mousewheel, Parallax } from "swiper/modules";
import "swiper/css";
import "./style/main.scss";

const contentElements = document.querySelectorAll(".content");
contentElements.forEach((content) => {
    const word = content.querySelector(".letters") as HTMLElement;
    if (!word) return;

    const chars: string[] | undefined = word.textContent?.split("");
    if (chars && chars.length) {
        chars.forEach((char, index) => {
            const span = document.createElement("span");
            span.innerText = char;
            span.classList.add("letter");
            span.style.zIndex = (chars.length - index).toString();
            span.style.transitionDelay = `${index * 0.1}s`;
            content.append(span);
        });
    }

    content.removeChild(word);
});

window.addEventListener("DOMContentLoaded", () => {
    new Swiper(".slider", {
        modules: [Mousewheel, Parallax],
        direction: "vertical",
        mousewheel: true,
        speed: 1500,
        parallax: true,
    });
});
