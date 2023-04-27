import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

const Html = {
  BODY: 'body',
};

const App = () => {
  const body = document.querySelector(Html.BODY);
  body.append(Header('Virtual keyboard'));
  body.append(Main());
  body.append(Footer());
};

App();
