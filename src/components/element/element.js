/**
 * @param {string} element HTML tag of element
 * @param {[string]} classList array of css classes that will be add to an element
 * @param {string} content string that contains html content
 * @param {{}} attributes Any valid attributes of element
 * @returns {HTMLElement}
 */
const Element = (element, classList = [], content = '', attributes = {}) => {
  const htmlElement = document.createElement(element);
  htmlElement.classList.add(...classList);
  htmlElement.insertAdjacentHTML('afterbegin', content);
  Object.keys(attributes).forEach((key) => {
    htmlElement.setAttribute(key, attributes[key]);
  });
  return htmlElement;
};

export default Element;
