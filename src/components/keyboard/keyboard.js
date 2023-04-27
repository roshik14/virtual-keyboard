import KeyboardUtils from './keyboard-utils';
import keys from '../../keys/keys-data';

const StorageProperties = {
  LANGUAGE: 'lang',
};

const MouseEvents = new Set(['mousedown', 'mouseup', 'click', 'dblclick']);
const KeyboardEvents = new Set(['keydown', 'keyup', 'keypress']);

/** Class representing keyboard component. */
class Keyboard {
  #rows;

  #keyObjects;

  #buttons;

  #element;

  #state;

  #language;

  /**
   * Creates a Keyboard component
   */
  constructor() {
    this.#element = KeyboardUtils.createKeyboardElement(this.#language);
    this.#rows = this.#element.firstChild;
    this.#buttons = KeyboardUtils.getButtonElements(this.#rows);
    this.#keyObjects = new Map(keys.flat().map((x, i) => [x.code, { index: i, data: x }]));

    this.#language = localStorage.getItem(StorageProperties.LANGUAGE)
      || KeyboardUtils.Languages.ENG;
    this.#state = {
      shift: false,
      capsLock: false,
      capsLockClick: false,
      control: false,
      win: false,
      alt: false,
    };

    KeyboardUtils.listenMouse(this);
    KeyboardUtils.listenKeyboard(this);
  }

  /**
   * @returns {HTMLELement} HTMLElement of Keyboard component for displaying in DOM
   */
  getElement() {
    return this.#element;
  }

  /**
   * Return state key's value
   * @param {String} key
   * @returns {Boolean | undefined} Value
   */
  getStateValue(key) {
    return this.#state[key];
  }

  /**
   * Return object that represents key data
   * @param {string} code event.code of pressed key
   * @returns {{index, keyData: {enKey, enShiftKey, ruKey, ruShiftKey, code, isWritable}}}
   */
  getKey(code) {
    return this.#keyObjects.get(code);
  }

  /**
   * Return array of objects that represents key data
   * @returns {[{ enKey, enShiftKey, ruKey, ruShiftKey, code, isWritable }]}
   */
  getKeysEntries() {
    return Object.values(Object.fromEntries(this.#keyObjects));
  }

  /**
   * Return Button element of keyboard
   * @param {Number} index Index of pressed button
   * @returns {HTMLButtonElement}
   */
  getButton(index) {
    return this.#buttons[index];
  }

  /**
   * Returns keyboard's current language
   * @returns {String}
   */
  getLanguage() {
    return this.#language;
  }

  /**
   * Updates button's display text
   * @param {Number} index
   * @param {{enKey, enShiftKey, ruKey, ruShiftKey, code, isWritable}} value
   */
  updateButton(index, value) {
    this.#buttons[index].textContent = value;
  }

  /**
   * Set parameter for state object
   * @param {String} key Key of state object
   * @param {Boolean} value Value
   */
  setStateValue(key, value) {
    this.#state[key] = value;
  }

  /**
   * Switch keyboard language from ENG to RU or from RU to ENG
   */
  updateLanguage() {
    this.#language = this.#language === KeyboardUtils.Languages.ENG
      ? KeyboardUtils.Languages.RU
      : KeyboardUtils.Languages.ENG;
    localStorage.setItem(StorageProperties.LANGUAGE, this.#language);
  }

  /**
   * Add listener on component (only mouse and keyboard events)
   * @returns {void}
   * @throws {Error} Type of event is not mouse event or keyboard event
   */
  addEventListener(type, listener, options) {
    if (MouseEvents.has(type)) {
      this.#rows.addEventListener(type, listener, options);
      return;
    }
    if (KeyboardEvents.has(type)) {
      document.body.addEventListener(type, listener, options);
      return;
    }
    throw Error('Unknown type of event');
  }
}

export default Keyboard;
