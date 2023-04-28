/* eslint-disable no-console */
import Keyboard from '../components/keyboard/keyboard';

const ArrowKey = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
};

const Html = {
  BUTTON: 'button',
};

const removeKeys = new Set([Keyboard.functionalKeys.BACKSPACE, Keyboard.functionalKeys.DELETE]);

/**
 * @param {Keyboard} keyboard
 * @param {{}} currentKey
 * @returns {String} Text value
 */
const getDisplayValue = (keyboard, text) => {
  const isCapsOn = keyboard.getStateValue(keyboard.StateKeys.CAPSLOCK);
  const isShiftOn = keyboard.getStateValue(keyboard.StateKeys.SHIFT);
  if (isCapsOn) {
    return isShiftOn ? text.toLowerCase() : text;
  }
  return isShiftOn ? text : text.toLowerCase();
};

/**
 * Add new key value to textarea value
 * @param {Keyboard} keyboard
 * @param {String} text Textarea value
 * @param {{}} key Object represents key data
 * @param {Number} pos Cursor position
 * @returns {String} new text value
 */
const getNewValue = (keyboard, text, buttonContent, pos) => {
  const displayValue = getDisplayValue(keyboard, buttonContent);
  const newValue = buttonContent === Keyboard.functionalKeys.ENTER ? '\n' : displayValue;
  return `${text.substring(0, pos)}${newValue}${text.substring(pos)}`;
};

/**
 * Removes previous or next character
 * @param {{}} key Object represents key data
 * @param {String} text Textarea value
 * @param {Number} start Cursor start position
 * @param {Number} end Cursor end position
 * @returns {String} new text value
 */
const removeTextValue = (key, text, start, end) => {
  const positions = new Map([
    [Keyboard.functionalKeys.BACKSPACE, [start - 1, start]],
    [Keyboard.functionalKeys.DELETE, [start, start + 1]],
  ]);
  if (start === end) {
    const [first, second] = positions.get(key.code);
    return text.substring(0, first) + text.substring(second);
  }
  return text.substring(0, start) + text.substring(end);
};

const moveCursorPosition = (key, pos) => {
  if (key.code === ArrowKey.RIGHT) {
    return pos + 1;
  }
  if (key.code === ArrowKey.LEFT) {
    return !pos ? pos : pos - 1;
  }
  return pos;
};

class StateManager {
  #keyboard;

  #textarea;

  #arrowKeys;

  /**
   * Construct StateManager that controls keyboard to manipulate textarea
   * @param { Keyboard } keyboard Keyboard component
   * @param { HTMLTextAreaElement } textarea TextArea component
   */
  constructor(keyboard, textarea) {
    this.#keyboard = keyboard;
    this.#textarea = textarea;
    this.#arrowKeys = new Set(Object.values(ArrowKey));
  }

  watch() {
    this.#listenKeyboard();
    this.#listenMouse();
  }

  #listenKeyboard = () => {
    this.#keyboard.addEventListener('keydown', (event) => {
      const key = this.#keyboard.getKey(event.code);
      this.#updateTextArea(key);
      event.preventDefault();
    });
  };

  #listenMouse = () => {
    this.#keyboard.addEventListener('click', (event) => {
      const { target } = event;
      if (target.closest(Html.BUTTON)) {
        const key = this.#keyboard.getKeyByButton(target);
        this.#updateTextArea(key);
      }
    });
  };

  #updateTextArea = (key) => {
    if (!key) {
      return;
    }
    this.#textarea.focus();
    const startPos = this.#textarea.selectionStart;
    if (key.data.isWritable) {
      this.#add(key, startPos);
      this.#updateCursorPosition(startPos + 1);
    }
    if (removeKeys.has(key.data.code)) {
      const endPos = this.#textarea.selectionEnd;
      const pos = this.#remove(key, startPos, endPos);
      this.#updateCursorPosition(pos);
    }
    if (this.#arrowKeys.has(key.data.code)) {
      const newPos = moveCursorPosition(key.data, startPos);
      this.#updateCursorPosition(newPos);
    }
  };

  #add = (key, cursorPosition) => {
    const content = this.#keyboard.getButton(key.index).textContent;
    const text = this.#textarea.value;
    this.#textarea.value = getNewValue(this.#keyboard, text, content, cursorPosition);
  };

  #remove = (key, start, end) => {
    this.#textarea.value = removeTextValue(key.data, this.#textarea.value, start, end);
    const pos = key.data.code === Keyboard.functionalKeys.BACKSPACE && start === end
      ? start - 1
      : start;
    return pos;
  };

  #updateCursorPosition = (pos) => {
    this.#textarea.selectionStart = pos;
    this.#textarea.selectionEnd = pos;
  };
}

export default StateManager;
