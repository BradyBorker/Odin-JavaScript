import plusSvg from "./icons/plus.svg";
import searchSvg from "./icons/search.svg";
import peopleSvg from "./icons/people.svg";
import commentSvg from "./icons/comment.svg";
import settingsSvg from "./icons/settings.svg";

export function toggleClass(node, className) {
    node.classList.toggle(className);
}

export function addMainRudderSvg(rudderBtn) {
    const imgNode = document.createElement('img');
    imgNode.src = plusSvg;
    imgNode.classList.add('rudder-primary-svg')
    rudderBtn.appendChild(imgNode);
}

export function addExtendedSvgs(rudderBtn, primarySvg) {
    setTimeout(() => {
        const prependSvgArray = [searchSvg, peopleSvg];
        prependSvgArray.forEach((svg) => {
            const imgNode = document.createElement('img');
            imgNode.src = svg;
            imgNode.classList.add('rudder-extended-svg');

            rudderBtn.insertBefore(imgNode, primarySvg);
        });

        const appendSvgArray = [commentSvg, settingsSvg];
        appendSvgArray.forEach((svg) => {
            const imgNode = document.createElement('img');
            imgNode.src = svg;
            imgNode.classList.add('rudder-extended-svg');

            rudderBtn.appendChild(imgNode);
        });
    }, '350');
}

export function removeExtendedSvgs(rudderBtn) {
    const extendedSvgs = document.querySelectorAll('.rudder-extended-svg');
    extendedSvgs.forEach((svg) => {
        rudderBtn.removeChild(svg);
    })
}