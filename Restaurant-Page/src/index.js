import buildBaseHtml from './build_base_html';
import buildHomeHtml from './build_home_html';
import buildMenuHtml from './build_menu_html';
import buildContactHtml from './build_contact_html';
import './style.css'

buildBaseHtml();
let currentTabId = buildHomeHtml();

function tabChange(newTabId) {
    let currentTab = document.querySelector(`#${currentTabId}`)
    currentTab.classList.remove('selected');

    let newTab = document.querySelector(`#${newTabId}`);
    newTab.classList.add('selected');
}

const tabs = document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
        if (e.target.id === 'home' && currentTabId !== 'home') {
            tabChange(e.target.id);
            currentTabId = buildHomeHtml();
        } else if (e.target.id === 'menu' && currentTabId !== 'menu') {
            tabChange(e.target.id);
            currentTabId = buildMenuHtml();
        } else if (e.target.id === 'contact' && currentTabId !== 'contact') {
            tabChange(e.target.id);
            currentTabId = buildContactHtml();
        };
    });
});
