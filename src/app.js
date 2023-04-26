import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

const App = () => {
  const body = document.querySelector('body');
  body.append(Header('Virtual keyboard'));
  body.append(Main());
  body.append(Footer());
};

App();
