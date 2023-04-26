import Button from '../button/button';
import keys from '../../keys/keys-data';
import Css from './keyboard-css';

const DEFAULT_PADDING = 25;
const BACKSPACE_PADDING = DEFAULT_PADDING * 5 + 7;
const ENTER_PADDING = DEFAULT_PADDING * 7 + 2;
const LEFT_SHIFT_PADDING = DEFAULT_PADDING * 4;
const RIGHT_SHIFT_PADDING = DEFAULT_PADDING * 6 + 5;
const SPACE_PADDING = DEFAULT_PADDING * 20 + 13;
const DELETE_PADDING = DEFAULT_PADDING * 3 + 6;
const CTRL_RIGHT_PADDING = DEFAULT_PADDING + 0.5;

const functionalKeyCodes = new Set([
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'ControlRight', 'MetaLeft', 'AltLeft', 'AltRight', 'Enter']);

const rightPaddings = new Map(
  [
    ['Backspace', BACKSPACE_PADDING],
    ['Delete', DELETE_PADDING],
    ['Enter', ENTER_PADDING],
    ['ShiftLeft', LEFT_SHIFT_PADDING],
    ['ShiftRight', RIGHT_SHIFT_PADDING],
    ['Space', SPACE_PADDING],
    ['ControlRight', CTRL_RIGHT_PADDING],
  ],
);

const buttons = new Set();

const getPadding = (paddings, code) => {
  if (paddings.has(code)) {
    return paddings.get(code);
  }
  return DEFAULT_PADDING;
};

const createRow = ({ buttons }) => {
  const div = document.createElement('div');
  div.classList.add(Css.KEYBOARD_ROW);
  buttons.forEach((x) => {
    const content = x.isWritable && x.key >= 'a' && x.key <= 'z' ? x.shiftKey : x.key;
    const classList = [Css.KEYBOARD_BUTTON];
    if (functionalKeyCodes.has(x.code)) {
      classList.push(Css.KEYBOARD_BUTTON_FUNCTIONAL);
    }
    const button = Button({ content, classList });
    if (rightPaddings.has(x.code)) {
      button.style.paddingRight = `${getPadding(rightPaddings, x.code)}px`;
    }
    buttons.add(button);
    div.append(button);
  });
  return div;
};

const createAllRows = () => {
  const container = document.createElement('div');
  container.classList.add(Css.KEYBOARD);
  keys.forEach((x) => {
    container.append(createRow({ buttons: x }));
  });
  return container;
};

export { createAllRows, buttons };
