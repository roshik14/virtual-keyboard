/* eslint-disable import/extensions */
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

const body = document.querySelector('body');
const header = Header('Virtual keyboard');
const main = Main();
const footer = Footer();

body.append(header);
body.append(main);
body.append(footer);
