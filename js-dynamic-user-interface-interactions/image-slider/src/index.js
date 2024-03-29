import { setFrameWidth, slideTransitions, addNavDots } from "./dom";
import setTimeOut, { resetTimeOut } from "./timeout";
import "./style.css";

const frameElement = document.querySelector(".frame");
const frameWidth = 500;
setFrameWidth(frameElement, frameWidth);

const slideElements = document.querySelectorAll(".slides > .slide");
slideElements.forEach((element) => {
  setFrameWidth(element, frameWidth);
});

const slidesContainer = document.querySelector(".slides");
const moveSlides = slideTransitions(slidesContainer, slideElements, frameWidth);

const navDotsContainer = document.querySelector(".nav-dots-container");
addNavDots(navDotsContainer, slidesContainer.children.length, moveSlides);

const timeOut = setTimeOut(moveSlides);

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
  moveSlides.left(1);
  resetTimeOut(timeOut);
});

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
  moveSlides.right(1);
  resetTimeOut(timeOut);
});
