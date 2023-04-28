/* eslint-disable no-console */
import Element from '../element/element';
import Button from '../button/button';
import keys from '../../keys/keys-data';

import './keyboard.scss';

const FunctionalKeys = {
  BACKSPACE: 'Backspace',
  TAB: 'Tab',
  DELETE: 'Delete',
  CAPSLOCK: 'CapsLock',
  SHIFT_LEFT: 'ShiftLeft',
  SHIFT_RIGHT: 'ShiftRight',
  CONTROL_LEFT: 'ControlLeft',
  CONTROL_RIGHT: 'ControlRight',
  WIN: 'MetaLeft',
  ALT_LEFT: 'AltLeft',
  ALT_RIGHT: 'AltRight',
  ENTER: 'Enter',
};

const ModifierStates = {
  SHIFT: 'Shift',
  CTRL: 'Control',
  WIN: 'OS',
  ALT: 'Alt',
};

const Html = {
  DIV: 'div',
  SECTION: 'section',
  BUTTON: 'button',
};

const Css = {
  KEYBOARD: 'keyboard',
  WRAPPER: 'keyboard-wrapper',
  ROW: 'keyboard-row',
  BUTTON: 'keyboard-button',
  BUTTON_FUNCTIONAL: 'keyboard-button__functional',
  BUTTON_ACTIVE: 'keyboard-button__active',
};

const Languages = {
  ENG: 'en',
  RU: 'ru',
};

const StorageProperties = {
  LANGUAGE: 'lang',
};

const MouseEvents = new Set(['mousedown', 'mouseup', 'click', 'dblclick']);
const KeyboardEvents = new Set(['keydown', 'keyup', 'keypress']);
const FunctionalKeyCodes = new Set(Object.values(FunctionalKeys));

const createButton = (content, code) => {
  const classList = [Css.BUTTON];
  if (FunctionalKeyCodes.has(code)) {
    classList.push(Css.BUTTON_FUNCTIONAL);
  }
  return Button({ content, classList });
};

const isLetter = (str) => (str >= 'a' && str <= 'z') || (str >= 'а' && str <= 'я');

/** Class representing keyboard component. */
class Keyboard {
  #rows;

  #buttons;

  #element;

  #state = {
    shift: false,
    capslock: false,
    control: false,
    win: false,
    alt: false,
  };

  #language = localStorage.getItem(StorageProperties.LANGUAGE) || Languages.ENG;

  #keyObjects = new Map(keys.flat().map((x, i) => [x.code, { index: i, data: x }]));

  #buttonsWithKeys;

  static functionalKeys = FunctionalKeys;

  StateKeys = {
    SHIFT: 'shift',
    CAPSLOCK: 'capslock',
    ALT: 'alt',
    WIN: 'win',
    CTRL: 'control',
  };

  /**
   * Creates a Keyboard component
   */
  constructor() {
    this.#element = this.#createKeyboardElement();
    this.#rows = this.#element.firstChild;
    this.#buttons = this.#getButtonElements();
    this.#buttonsWithKeys = this.#getButtonsWithKeys();

    this.#listenMouse();
    this.#listenKeyboard();
  }

  /**
   * @returns {HTMLELement} HTMLElement of Keyboard component for displaying in DOM
   */
  getElement = () => this.#element;

  /**
   * Return state key's value
   * @param {String} key
   * @returns {Boolean | undefined} Value
   */
  getStateValue = (key) => this.#state[key];

  /**
   * Return object that represents key data
   * @param {string} code event.code of pressed key
   * @returns {{index, data: {enKey, enShiftKey, ruKey, ruShiftKey, code, isWritable}}}
   */
  getKey = (code) => this.#keyObjects.get(code);

  /**
   * Returns key by pased HTMLButtonElement
   * @param {HTMLButtonElement} button
   * @returns {{enKey, enShiftKey, ruKey, ruShiftKey, code, isWritable}}
   */
  getKeyByButton = (button) => this.#buttonsWithKeys.get(button);

  /**
   * Return Button element of keyboard
   * @param {Number} index Index of pressed button
   * @returns {HTMLButtonElement}
   */
  getButton = (index) => this.#buttons[index];

  /**
   * Returns keyboard's current language
   * @returns {String}
   */
  getLanguage = () => this.#language;

  /**
   * Add listener on component (only mouse and keyboard events)
   * @param {String} type type of event
   * @param {Function} listener callback function
   * @param {{}} options options for listener
   * @throws {Error} Type of event is not mouse event or keyboard event
   */
  addEventListener = (type, listener, options) => {
    if (MouseEvents.has(type)) {
      this.#rows.addEventListener(type, listener, options);
      return;
    }
    if (KeyboardEvents.has(type)) {
      document.body.addEventListener(type, listener, options);
      return;
    }
    throw Error('Unknown type of event');
  };

  #listenMouse = () => {
    this.addEventListener('click', (event) => {
      const { target } = event;
      if (target.closest(Html.BUTTON) && target.textContent === FunctionalKeys.CAPSLOCK) {
        this.#switchCapsLock(target);
      }
    });
  };

  #listenKeyboard = () => {
    this.#listenKeyDown();
    this.#listenKeyUp();
  };

  #listenKeyDown = () => {
    this.addEventListener('keydown', (event) => {
      const key = this.getKey(event.code);
      if (!key || key.data.code === FunctionalKeys.CAPSLOCK) {
        return;
      }
      this.#state.alt = event.getModifierState(ModifierStates.ALT);
      this.#state.control = event.getModifierState(ModifierStates.CTRL);
      this.#state.shift = event.getModifierState(ModifierStates.SHIFT);
      this.#state.win = event.getModifierState(ModifierStates.WIN);

      this.getButton(key.index).classList.add(Css.BUTTON_ACTIVE);

      if (this.#state.shift) {
        this.#updateKeyboard();
        return;
      }
      if (this.#state.alt && this.#state.control) {
        this.#updateLanguage();
        this.#updateKeyboard(false);
      }
    });

    this.addEventListener('keydown', (event) => {
      const key = this.getKey(event.code);
      if (!key || key.data.code !== FunctionalKeys.CAPSLOCK) {
        return;
      }
      this.#switchCapsLock();
    });
  };

  #listenKeyUp = () => {
    this.addEventListener('keyup', (event) => {
      const key = this.getKey(event.code);
      if (!key || key.data.code === FunctionalKeys.CAPSLOCK) {
        return;
      }
      this.getButton(key.index).classList.remove(Css.BUTTON_ACTIVE);
      if (key.data.code === FunctionalKeys.SHIFT_LEFT
          || key.data.code === FunctionalKeys.SHIFT_RIGHT) {
        this.#state.shift = false;
      }
      this.#updateKeyboard();
    });
  };

  #updateLanguage = () => {
    this.#language = this.#language === Languages.ENG ? Languages.RU : Languages.ENG;
    localStorage.setItem(StorageProperties.LANGUAGE, this.#language);
  };

  #getDisplayKey = (key) => {
    const current = this.#language === Languages.ENG
      ? { key: key.enKey, shiftKey: key.enShiftKey }
      : { key: key.ruKey, shiftKey: key.ruShiftKey };
    return isLetter(current.key) || this.#state.shift ? current.shiftKey : current.key;
  };

  #createKeyboardElement = () => {
    const buttons = this.#createButtons();
    const container = Element(Html.SECTION, [Css.WRAPPER]);
    container.append(buttons);
    return container;
  };

  #createButtons = () => {
    const container = Element(Html.DIV, [Css.KEYBOARD]);
    keys.forEach((btnKeys, i) => {
      const wrapper = Element(Html.DIV, [`${Css.ROW}-${i}`]);
      btnKeys.forEach((key) => {
        const content = this.#getDisplayKey(key, this.#language);
        const button = createButton(content, key.code);
        wrapper.append(button);
      });
      container.append(wrapper);
    });
    return container;
  };

  #updateKeyboard = () => {
    this.#keyObjects.forEach((value) => {
      this.getButton(value.index).textContent = this.#getDisplayKey(value.data);
    });
  };

  #switchCapsLock = (button) => {
    this.#state.capslock = !this.#state.capslock;
    button.classList.toggle(Css.BUTTON_ACTIVE);
  };

  #getButtonElements = () => {
    const buttons = [];
    Array.from(this.#rows.children)
      .forEach((row) => Array.from(row.children)
        .forEach((btn) => buttons.push(btn)));
    return buttons;
  };

  #getButtonsWithKeys = () => {
    const result = new Map();
    this.#keyObjects.forEach((value) => {
      const button = this.getButton(value.index);
      result.set(button, value);
    });
    return result;
  };
}

export default Keyboard;
