import Element from '../element/element';

const Button = ({ content, classList }) => {
  const button = Element('button', classList, content);
  return button;
};

export default Button;
