export default function() {
    const main = document.querySelector('div#content > main')

    const mainSection = document.createElement('section');
    mainSection.id = 'contact';

    const sectionHead = document.createElement('h1');
    const headText = document.createTextNode('Contact Us');
    sectionHead.appendChild(headText);

    const email = document.createElement('p');
    const emailText = document.createTextNode('test.email@example.com');
    email.appendChild(emailText);

    const phoneNumber = document.createElement('p');
    const phoneNumberText = document.createTextNode('xxx-xxx-xxxx');
    phoneNumber.appendChild(phoneNumberText);

    mainSection.appendChild(sectionHead);
    mainSection.appendChild(email);
    mainSection.appendChild(phoneNumber);

    main.replaceChildren(mainSection);

    return 'contact';
}