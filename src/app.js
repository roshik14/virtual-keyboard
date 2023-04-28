import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

window.VirtualKeyboard = {};

const Html = {
  BODY: 'body',
};

const App = () => {
  const body = document.querySelector(Html.BODY);
  body.append(Header());
  body.append(Main());
  body.append(Footer());
};

App();
