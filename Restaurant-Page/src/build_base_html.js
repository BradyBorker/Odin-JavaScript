import gitHubSvg from './images/github.svg'

export default function() {
    const content = document.querySelector('div#content')
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    const tabIds = ['home', 'menu', 'contact'];
    for (let tabId of tabIds) {
        const tab = document.createElement('div');
        tab.id = tabId;
        tab.classList.add('tab');
        if (tabId === 'home') { tab.classList.add('selected') };

        let text = document.createTextNode(tabId.toUpperCase());
        tab.appendChild(text)
        
        header.appendChild(tab)
    }

    const text = document.createTextNode('Built by BradyBorker');
    const anchor = document.createElement('a');
    anchor.href = 'https://github.com/BradyBorker';
    const svg = document.createElement('img');
    svg.src = gitHubSvg;
    anchor.appendChild(svg);

    footer.appendChild(text)
    footer.appendChild(anchor)
    
}