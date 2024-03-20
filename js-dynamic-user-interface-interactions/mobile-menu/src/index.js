import "./style.css"
import toggleClass from "./dom";

const rudderBtn = document.querySelector('.rudder-btn');
rudderBtn.addEventListener('click', (e) => {
    toggleClass(e.target, 'extend');
})