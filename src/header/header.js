import './header.scss';
// eslint-disable-next-line import/extensions
import Wrapper from '../components/wrapper/wrapper.js';

const Title = (title) => {
  const titleElement = document.createElement('h1');
  titleElement.classList.add('header-title');
  titleElement.innerHTML = title;
  return titleElement;
};

const Header = (title) => {
  const header = document.createElement('header');
  const wrapper = Wrapper();
  wrapper.append(Title(title));
  header.append(wrapper);
  return header;
};

export default Header;
