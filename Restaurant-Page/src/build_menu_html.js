import menu from './images/menu.png'

export default function() {
    const main = document.querySelector('div#content > main')

    const mainSection = document.createElement('section');
    mainSection.id = 'menu';

    main.replaceChildren(mainSection);

    return 'menu';
}