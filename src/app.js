/* eslint-disable import/extensions */
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

const init = () => {
  const body = document.querySelector('body');
  body.append(Header('Virtual keyboard'));
  body.append(Main());
  body.append(Footer());
};

init();
