export default function() {
    const main = document.querySelector('div#content > main')
    
    const mainSection = document.createElement('section');
    const image = document.createElement('img');
    image.src = '' // Need to update later

    const sectionHead = document.createElement('h1');
    const sectionHeadText = document.createTextNode('Delicious Cuisine!');
    sectionHead.appendChild(sectionHeadText);

    const sectionBody = document.createElement('p');
    const sectionBodyText = document.createTextNode('The food here is so good!');
    sectionBody.appendChild(sectionBodyText);

    mainSection.appendChild(sectionHead);
    mainSection.appendChild(sectionBody);
    
    main.replaceChildren(mainSection, image);
}