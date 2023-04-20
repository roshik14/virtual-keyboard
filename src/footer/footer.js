/* eslint-disable import/extensions */
import './footer.scss';
import Wrapper from '../components/wrapper/wrapper.js';

const Footer = () => {
  const footer = document.createElement('footer');
  footer.append(Wrapper());
  return footer;
};

export default Footer;
