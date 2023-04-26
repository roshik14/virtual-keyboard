const Button = ({ content, classList }) => {
  const button = document.createElement('button');
  button.classList.add(...classList);
  button.innerHTML = content;
  return button;
};

export default Button;
