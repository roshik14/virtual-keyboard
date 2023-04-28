import Element from '../components/element/element';
import TextArea from '../components/textarea/textarea';
import Wrapper from '../components/wrapper/wrapper';
import Keyboard from '../components/keyboard/keyboard';
import StateManager from '../state-manager/state-manager';
import './main.scss';

const Html = {
  MAIN: 'main',
};

const Css = {
  MAIN: 'main',
  MAIN_BG: 'main-bg',
};

const startListen = (keyboard, textarea) => {
  const stateManager = new StateManager(keyboard, textarea);
  stateManager.watch();
};

const getContent = () => {
  const wrapper = Wrapper();
  const textarea = TextArea();
  const keyboard = new Keyboard();
  startListen(keyboard, textarea);
  wrapper.append(textarea);
  wrapper.append(keyboard.getElement());
  return wrapper;
};

const Main = () => {
  const main = Element(Html.MAIN, [Css.MAIN, Css.MAIN_BG]);
  main.append(getContent());
  return main;
};

export default Main;
