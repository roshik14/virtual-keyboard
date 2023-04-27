import Element from '../components/element/element';
import Wrapper from '../components/wrapper/wrapper';
import './header.scss';

const Header = (title) => {
  const wrapper = Wrapper();
  wrapper.append(Element('h1', ['header-title'], title));
  const header = Element('header');
  header.append(wrapper);
  return header;
};

export default Header;
