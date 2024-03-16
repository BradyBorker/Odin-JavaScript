import './style.css';
import { addClass, removeClass } from './dom';

const dropDownTitles = document.querySelectorAll('.drop-down-title');
dropDownTitles.forEach((dropDownTitle) => {
  dropDownTitle.addEventListener('mouseover', (e) => {
    const dropDownItems = e.target.parentNode.querySelector('.drop-down-items');
    addClass(dropDownItems, 'visible');
  });
});

const dropDownContainers = document.querySelectorAll('.drop-down-container');
dropDownContainers.forEach((container) => {
  container.addEventListener('mouseleave', (e) => {
    const dropDownItems = e.target.querySelector('.drop-down-items');
    if (dropDownItems.classList.contains('visible')) {
      removeClass(dropDownItems, 'visible');
    }
  });
});
