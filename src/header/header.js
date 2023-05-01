import Element from '../components/element/element';
import Wrapper from '../components/wrapper/wrapper';
import './header.scss';

const Html = {
  HEADER: 'header',
  TITLE: 'h1',
};

const Css = {
  HEADER: 'header',
  TITLE: 'header-title',
};

const Header = () => {
  const wrapper = Wrapper();
  wrapper.append(Element(Html.TITLE, [Css.TITLE], 'Virtual keyboard'));
  const header = Element(Html.HEADER, [Css.HEADER]);
  header.append(wrapper);
  return header;
};

export default Header;
