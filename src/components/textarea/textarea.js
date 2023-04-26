import './textarea.scss';

const TextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.rows = 10;
  textarea.classList.add('textarea');
  textarea.autofocus = true;
  return textarea;
};

export default TextArea;
