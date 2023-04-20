import './textarea.scss';

const TextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.rows = 5;
  textarea.classList.add('textarea');
  return textarea;
};

export default TextArea;
