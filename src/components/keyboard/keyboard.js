import { createAllRows, buttons } from './keyboard-row';
import Css from './keyboard-css';
import './keyboard.scss';

const keys = new Map(keys.flat().map((x, i) => {
  const newObj = { index: i, data: x };
  return [x.code, newObj];
}));

const toggleButton = (code, callback) => {
  if (keys.has(code)) {
    const value = keys.get(code); 
    callback(value);
  }
};

const listenKeyboardView = () => {
  document.body.addEventListener('keydown', (event) => {
    toggleButton(event.code, (value) => buttons[value.index].classList.add(Css.KEYBOARD_BUTTON_ACTIVE));
  });
  document.body.addEventListener('keyup', (event) => {
    toggleButton(event.code, (value) => buttons[value.index].classList.remove(Css.KEYBOARD_BUTTON_ACTIVE));
  });
};

const listenMouseView = (rows) => {
  rows.addEventListener('click', (event) => {
    if (event.target.closest('button') && event.target.textContent === 'CapsLock') {
      event.target.classList.toggle('keys-button__active');
    }
  });
};

const listenMouse = () => {
  listenMouseView();
  
};

const listenKeyboard = () => {
  listenKeyboardView();
};

const Keyboard = () => {
  const container = document.createElement('section');
  const rows = createAllRows();
  container.append(rows);
  container.classList.add(Css.KEYBOARD_WRAPPER);
  listenMouse(rows);
  listenKeyboard();
  return container;
};

export default Keyboard;
