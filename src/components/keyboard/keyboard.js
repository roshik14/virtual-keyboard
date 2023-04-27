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
  CONTROL_RIGHT: 'ControlRIght',
  WIN: 'MetaLeft',
  ALT_LEFT: 'AltLeft',
  ALT_RIGHT: 'AltRight',
  ENTER: 'Enter',
};

const ModifierStates = {
  CAPSLOCK: FunctionalKeys.CAPSLOCK,
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

const MouseEvents = new Set(['mousedown', 'mouseup', 'click', 'dblclick']);
const KeyboardEvents = new Set(['keydown', 'keyup', 'keypress']);

const isLetter = (character) => (character >= 'a' && character <= 'z') || (character >= 'а' && character <= 'я');

const createButton = (current, code, isWritable) => {
  const content = isWritable && isLetter(current.key) ? current.shiftKey : current.key;
  const classList = [Css.BUTTON];
  if (FunctionalKeys[code]) {
    classList.push(Css.BUTTON_FUNCTIONAL);
  }
  return Button({ content, classList });
};

const createButtons = (language) => {
  const container = Element(Html.DIV, [Css.KEYBOARD]);
  keys.forEach((btnKeys) => {
    const wrapper = Element(Html.DIV, [Css.WRAPPER]);
    btnKeys.forEach((key) => {
      const current = language === 'en'
        ? { key: key.enKey, shiftKey: key.enShiftKey }
        : { key: key.ruKey, shiftKey: key.ruShiftKey };
      const button = createButton(current, key.code, key.isWritable);
      wrapper.append(button);
    });
    container.append(wrapper);
  });
  return container;
};

/** Class representing keyboard component. */
class Keyboard {
  #rows;

  #keysData;

  #buttons;

  constructor() {
    this.#rows = null;
    this.#keysData = null;
    this.#buttons = null;

    this.language = localStorage.getItem('lang') || 'en';
    this.state = {
      shift: false,
      capsLock: false,
      capsLockClick: false,
      control: false,
      win: false,
      alt: false,
    };
  }

  get keys() {
    return this.#keysData;
  }

  get buttons() {
    return this.#buttons;
  }

  /**
   * Create component for displaying in DOM
   * @returns {HtmlElement} section
   */
  create() {
    this.#rows = createButtons(this.language);
    this.listenMouseAndKeyboard();
    const container = Element(Html.SECTION, [Css.KEYBOARD_WRAPPER]);
    container.append(this.#rows);
    return container;
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

  listenMouseAndKeyboard() {
    this.listenMouse();
    this.listenKeyboard();
  }

  listenMouse() {
    this.addEventListener('click', (event) => {
      const { target } = event;
      if (target.closest(Html.BUTTON) && target.textContent === FunctionalKeys.CAPSLOCK) {
        this.state.capsLockClick = !this.state.capsLockClick;
        target.classList.toggle(Css.BUTTON_ACTIVE);
      }
    });
  }

  listenKeyboard() {
    this.fillButtons();
    const keysDict = new Map(keys.flat().map((x, i) => [x.code, { index: i, data: x }]));
    document.body.addEventListener('keydown', (event) => {
      if (keysDict.has(event.code)) {
        this.buttons[keysDict.get(event.code).index].classList.add(Css.BUTTON_ACTIVE);
      }
    });
    document.body.addEventListener('keyup', (event) => {
      if (keysDict.has(event.code)) {
        this.buttons[keysDict.get(event.code).index].classList.remove(Css.BUTTON_ACTIVE);
      }
    });
    document.body.addEventListener('keydown', (event) => {
      this.state.alt = event.getModifierState(ModifierStates.ALT);
      this.state.capsLock = event.getModifierState(ModifierStates.CAPSLOCK);
      this.state.control = event.getModifierState(ModifierStates.CTRL);
      this.state.shift = event.getModifierState(ModifierStates.SHIFT);
      this.state.win = event.getModifierState(ModifierStates.WIN);
    });
  }

  fillButtons() {
    if (this.#buttons) {
      return;
    }
    this.#buttons = [];
    Array.from(this.#rows.children)
      .forEach((row) => Array.from(row.children)
        .forEach((btn) => this.#buttons.push(btn)));
  }
}

export default Keyboard;
