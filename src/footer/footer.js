import Element from '../components/element/element';
import Wrapper from '../components/wrapper/wrapper';
import './footer.scss';

const Footer = () => {
  const footer = Element('footer');
  footer.append(Wrapper());
  return footer;
};

export default Footer;
