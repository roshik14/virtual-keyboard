import Element from '../components/element/element';
import TextArea from '../components/textarea/textarea';
import Wrapper from '../components/wrapper/wrapper';
import Keyboard from '../components/keyboard/keyboard';
import StateManager from '../state-manager/state-manager';
import './main.scss';

const Html = {
  MAIN: 'main',
  DIV: 'div',
  Paragraph: 'p',
};

const Css = {
  MAIN: 'main',
  MAIN_BG: 'main-bg',
  DESCRIPTION: 'description',
};

const startListen = (keyboard, textarea) => {
  const stateManager = new StateManager(keyboard, textarea);
  stateManager.watch();
};

const getSwitchLangDescription = () => {
  const content = 'Keyboard was made on Linux OS (Ubuntu). To switch language press Ctrl + Alt';
  const paragraph = Element(Html.Paragraph, [Css.DESCRIPTION], content);
  return paragraph;
};

const getContent = () => {
  const wrapper = Wrapper();
  const textarea = TextArea();
  const keyboard = new Keyboard();
  startListen(keyboard, textarea);
  wrapper.append(textarea);
  wrapper.append(keyboard.getElement());
  wrapper.append(getSwitchLangDescription());
  return wrapper;
};

const Main = () => {
  const main = Element(Html.MAIN, [Css.MAIN, Css.MAIN_BG]);
  main.append(getContent());
  return main;
};

export default Main;
