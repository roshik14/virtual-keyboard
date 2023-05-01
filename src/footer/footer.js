import Element from '../components/element/element';
import Wrapper from '../components/wrapper/wrapper';
import './footer.scss';

const Html = {
  FOOTER: 'footer',
  LIST_ELEMENT: 'li',
  LIST: 'ul',
  LINK: 'a',
};

const Css = {
  FOOTER: 'footer',
  LIST: 'footer-list',
  LINK: 'footer-link',
};

const Link = (content, options) => {
  const link = Element(Html.LINK, [Css.LINK], content, options);
  return link;
};

const List = () => {
  const list = Element(Html.LIST, [Css.LIST]);
  const li = Element(Html.LIST_ELEMENT);
  li.append(Link('Github', { href: 'https://github.com/roshik14', target: '_blank' }));
  list.append(li);
  return list;
};

const Footer = () => {
  const wrapper = Wrapper();
  wrapper.append(List());
  const footer = Element(Html.FOOTER, [Css.FOOTER]);
  footer.append(wrapper);
  return footer;
};

export default Footer;
