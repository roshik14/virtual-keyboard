/* eslint-disable no-console */
// import Keyboard from '../components/keyboard/keyboard';

const getNewTextValue = (key, text) => {
  console.log(key);
  if (key.isWritable) {
    return text + key.enKey;
  }
  return text;
};

class StateManager {
  #keyboard;

  #textarea;

  /**
   * Construct StateManager that controls keyboard to manipulate textarea
   * @param { Keyboard } keyboard Keyboard component
   * @param { HTMLTextAreaElement } textarea TextArea component
   */
  constructor(keyboard, textarea) {
    this.#keyboard = keyboard;
    this.#textarea = textarea;
    this.watch();
  }

  watch() {
    this.#keyboard.addEventListener('keydown', (event) => {
      const key = this.#keyboard.getKey(event.code);
      if (key) {
        this.#textarea.focus();
        this.#textarea.value = getNewTextValue(key.data, this.#textarea.value);
      }
    });
  }
}

export default StateManager;
