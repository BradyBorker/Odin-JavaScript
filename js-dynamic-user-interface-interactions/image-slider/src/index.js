import { setFrameWidth } from "./dom";
import "./style.css";

const frameElement = document.querySelector('.frame');
const frameWidth = '500';
setFrameWidth(frameElement, frameWidth);

const slideElements = document.querySelectorAll('.slides > .slide');
slideElements.forEach((element) => {
    setFrameWidth(element, frameWidth);
})

const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', () => {

})