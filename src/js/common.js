import toolbarSwich from '../html/toolbar.html';
import menuItemsTemplate from '../templates/templateitems.html';
import dataMenuList from '../json/menu.json';

//constants section
const Handlebars = require("handlebars");
const toolBar = document.querySelector('.toolbar');
toolBar.insertAdjacentHTML('afterbegin', toolbarSwich);
const toolbarDom = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const menuItems = document.querySelector('#menu');
let currentTheme = localStorage.getItem('Theme', body.className);

//Using Handlebars to compile template and parse items list trough func in to the DOM
const dataMenu = Handlebars.compile(menuItemsTemplate);
menuItems.insertAdjacentHTML('afterbegin', dataMenu(dataMenuList));

//Checking exists theme and check box condition
if (!currentTheme) {
    toolbarDom.checked = false;
    localStorage.setItem('Checked', toolbarDom.checked);
    body.classList.add('light-theme');
    currentTheme = localStorage.setItem('Theme', body.className);
 } else {
    body.classList.add(currentTheme);
    toolbarDom.checked = JSON.parse(localStorage.getItem('Checked'));
 };

//Ev.listener for theme switcher
const changeTheme = () => {
    body.classList.toggle(Theme.DARK);
    body.classList.toggle(Theme.LIGHT);
    currentTheme = localStorage.setItem('Theme', body.className);
    localStorage.setItem('Checked', toolbarDom.checked);
};

toolbarDom.addEventListener('change', changeTheme);