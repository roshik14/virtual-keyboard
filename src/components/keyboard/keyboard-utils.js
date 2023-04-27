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

const Languages = {
  ENG: 'en',
  RU: 'ru',
};

const FunctionalKeyCodes = new Set(Object.values(FunctionalKeys));

const isLetter = (str) => (str >= 'a' && str <= 'z') || (str >= 'а' && str <= 'я');

const getDisplayKey = (key, language) => {
  const current = language === Languages.ENG
    ? { key: key.enKey, shiftKey: key.enShiftKey }
    : { key: key.ruKey, shiftKey: key.ruShiftKey };
  return isLetter(current.key) ? current.shiftKey : current.key;
};

const createButton = (content, code) => {
  const classList = [Css.BUTTON];
  if (FunctionalKeyCodes.has(code)) {
    classList.push(Css.BUTTON_FUNCTIONAL);
  }
  return Button({ content, classList });
};

const createButtons = (language) => {
  const container = Element(Html.DIV, [Css.KEYBOARD]);
  keys.forEach((btnKeys, i) => {
    const wrapper = Element(Html.DIV, [`${Css.ROW}-${i}`]);
    btnKeys.forEach((key) => {
      const content = getDisplayKey(key, language);
      const button = createButton(content, key.code);
      wrapper.append(button);
    });
    container.append(wrapper);
  });
  return container;
};

/**
   * Create HTMLElement of Keyboard component for displaying in DOM
   * @returns {HtmlElement} section
   */
const createKeyboardElement = (language) => {
  const buttons = createButtons(language);
  const container = Element(Html.SECTION, [Css.WRAPPER]);
  container.append(buttons);
  return container;
};

const updateKeyboard = (obj) => {
  obj.updateLanguage();
  obj.getKeysEntries().forEach((value) => {
    obj.updateButton(value.index, getDisplayKey(value.data, obj.getLanguage()));
  });
};

const listenMouse = (obj) => {
  obj.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest(Html.BUTTON) && target.textContent === FunctionalKeys.CAPSLOCK) {
      const key = 'capsLockClick';
      obj.setStateValue(key, !obj.getStateValue(key));
      target.classList.toggle(Css.BUTTON_ACTIVE);
    }
  });
};

const listenKeyboard = (obj) => {
  obj.addEventListener('keydown', (event) => {
    const key = obj.getKey(event.code);
    if (key) {
      obj.getButton(key.index).classList.add(Css.BUTTON_ACTIVE);
    }
  });
  obj.addEventListener('keyup', (event) => {
    const key = obj.getKey(event.code);
    if (key) {
      obj.getButton(key.index).classList.remove(Css.BUTTON_ACTIVE);
    }
  });
  obj.addEventListener('keydown', (event) => {
    obj.setStateValue('alt', event.getModifierState(ModifierStates.ALT));
    obj.setStateValue('capsLock', event.getModifierState(ModifierStates.CAPSLOCK));
    obj.setStateValue('control', event.getModifierState(ModifierStates.CTRL));
    obj.setStateValue('shift', event.getModifierState(ModifierStates.SHIFT));
    obj.setStateValue('win', event.getModifierState(ModifierStates.WIN));
  });

  obj.addEventListener('keydown', (event) => {
    if ((obj.getStateValue('shift') && event.code === FunctionalKeys.CONTROL_LEFT)
      || (obj.getStateValue('control') && event.code === FunctionalKeys.SHIFT_LEFT)) {
      updateKeyboard(obj);
    }
  });
};

const getButtonElements = (rows) => {
  const buttons = [];
  Array.from(rows.children)
    .forEach((row) => Array.from(row.children)
      .forEach((btn) => buttons.push(btn)));
  return buttons;
};

const KeyboardUtils = {
  createKeyboardElement,
  listenMouse,
  listenKeyboard,
  getButtonElements,
  Languages,
};

export default KeyboardUtils;
