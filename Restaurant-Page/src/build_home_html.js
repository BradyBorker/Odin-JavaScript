import cakeImage from './images/cake.jpeg'

export default function() {
    const main = document.querySelector('div#content > main')
    
    const mainSection = document.createElement('section');
    mainSection.id = 'home'

    const sectionArticle = document.createElement('article'); 
    const articleHead = document.createElement('h1');
    const articleHeadText = document.createTextNode('My Bakery!');
    articleHead.appendChild(articleHeadText);

    const articleBody = document.createElement('p');
    const articleBodyText = document.createTextNode('The food here is so good!');
    articleBody.appendChild(articleBodyText);

    sectionArticle.appendChild(articleHead);
    sectionArticle.appendChild(articleBody);

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    
    image.src = cakeImage // Need to update later
    imageContainer.appendChild(image);
    imageContainer.classList.add('image-container');

    mainSection.appendChild(sectionArticle);
    mainSection.appendChild(imageContainer);
    
    main.replaceChildren(mainSection);

    return 'home';
}