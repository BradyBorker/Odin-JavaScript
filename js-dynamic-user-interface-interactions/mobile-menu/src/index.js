import "./style.css";
import {
  toggleClass,
  addMainRudderSvg,
  addExtendedSvgs,
  removeExtendedSvgs,
} from "./dom";

const rudderBtn = document.querySelector(".rudder-btn");
addMainRudderSvg(rudderBtn);

const rudderBtnSvg = document.querySelector(".rudder-primary-svg");
rudderBtnSvg.addEventListener("click", (e) => {
  toggleClass(rudderBtn, "extend");
  toggleClass(e.target, "rotate");

  if (rudderBtn.classList.contains("extend")) {
    addExtendedSvgs(rudderBtn, e.target);
  } else {
    removeExtendedSvgs(rudderBtn);
  }
});
