/* eslint-disable no-console */
import Keyboard from '../components/keyboard/keyboard';

/**
 * Determines event.code is Arrow key or not
 * @param {String} code event.code of pressed key
 * @returns {Boolean}
 */

const ArrowKey = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
};

const removeKeys = new Set([Keyboard.functionalKeys.BACKSPACE, Keyboard.functionalKeys.DELETE]);

/**
 * Add new key value to textarea value
 * @param {{}} key Object represents key data
 * @param {String} text Textarea value
 * @param {Number} pos Cursor position
 * @returns {String} new text value
 */
const addNewTextValue = (key, text, pos) => {
  const newValue = key.code === Keyboard.functionalKeys.ENTER ? '\n' : key.enKey;
  return `${text.substring(0, pos)}${newValue}${text.substring(pos)}`;
};

/**
 * Removes previous or next character
 * @param {{}} key Object represents key data
 * @param {String} text Textarea value
 * @param {Number} pos Cursor position
 * @returns {String} new text value
 */
const removeTextValue = (key, text, pos) => {
  if (key.code === Keyboard.functionalKeys.BACKSPACE) {
    return text.substring(0, pos - 1) + text.substring(pos);
  }
  if (key.code === Keyboard.functionalKeys.DELETE) {
    return text.substring(0, pos) + text.substring(pos + 1);
  }
  return text;
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
    this.watch();
  }

  watch() {
    this.#keyboard.addEventListener('keydown', (event) => {
      const key = this.#keyboard.getKey(event.code)?.data ?? null;
      if (key) {
        this.#textarea.focus();
        const cursorPos = this.#textarea.selectionStart;
        if (key.isWritable) {
          this.#textarea.value = addNewTextValue(key, this.#textarea.value, cursorPos);
          this.updateCursorPosition(cursorPos + 1);
        }
        if (removeKeys.has(key.code)) {
          this.#textarea.value = removeTextValue(key, this.#textarea.value, cursorPos);
          const pos = key.code === Keyboard.functionalKeys.BACKSPACE && cursorPos
            ? cursorPos - 1
            : cursorPos;
          this.updateCursorPosition(pos);
        }
        if (this.#arrowKeys.has(key.code)) {
          const newPos = moveCursorPosition(key, cursorPos);
          this.updateCursorPosition(newPos);
        }
      }
    });
  }

  updateCursorPosition(pos) {
    this.#textarea.selectionStart = pos;
    this.#textarea.selectionEnd = pos;
  }
}

export default StateManager;
