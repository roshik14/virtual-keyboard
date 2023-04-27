const Element = (element, classList = [], content = '', options = {}) => {
  const htmlElement = document.createElement(element);
  htmlElement.classList.add(...classList);
  htmlElement.innerHTML = content;
  Object.keys(options).forEach((key) => {
    htmlElement[key] = options[key];
  });
  return htmlElement;
};

export default Element;
