/**
 * @param {string} element HTML tag of element
 * @param {[string]} classList array of css classes that will be add to an element
 * @param {string} content string that contains html content
 * @param {{}} options Any valid properties of element
 * @returns {HTMLElement}
 */
const Element = (element, classList = [], content = '', options = {}) => {
  const htmlElement = document.createElement(element);
  htmlElement.classList.add(...classList);
  htmlElement.insertAdjacentHTML('afterbegin', content);
  Object.keys(options).forEach((key) => {
    htmlElement.setAttribute(key, options[key]);
  });
  return htmlElement;
};

export default Element;
