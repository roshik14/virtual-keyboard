import Element from '../element/element';
import './textarea.scss';

const Css = {
  TEXTAREA: 'textarea',
};

const Attributes = {
  rows: 10,
  autofocus: true,
  wrap: 'soft',
};

const disableDefaultKeypress = (textarea) => {
  textarea.addEventListener('keydown', (event) => {
    event.preventDefault();
  });
};

const TextArea = () => {
  const textarea = Element('textarea', [Css.TEXTAREA], '', Attributes);
  disableDefaultKeypress(textarea);
  return textarea;
};

export default TextArea;
