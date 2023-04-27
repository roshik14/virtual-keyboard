import Element from '../element/element';
import './textarea.scss';

const Css = {
  TEXTAREA: 'textarea',
};

const Options = {
  rows: 10,
  autofocus: true,
};

const disableDefaultKeypress = (textarea) => {
  textarea.addEventListener('keypress', (event) => {
    event.preventDefault();
  });
};

const TextArea = () => {
  const textarea = Element('textarea', [Css.TEXTAREA], '', Options);
  disableDefaultKeypress(textarea);
  return textarea;
};

export default TextArea;
