import _ from 'lodash'
// import function from another file
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Use imported function
    element.textContent = myName('Cody');

    return element;
}

document.body.appendChild(component());