import Element from '../components/element/element';
import TextArea from '../components/textarea/textarea';
import Wrapper from '../components/wrapper/wrapper';
import Keyboard from '../components/keyboard/keyboard';

const getContent = () => {
  const wrapper = Wrapper();
  const textarea = TextArea();
  const keyboard = new Keyboard();
  wrapper.append(textarea);
  wrapper.append(keyboard.create());
  return wrapper;
};

const Main = () => {
  const main = Element('main');
  main.append(getContent());
  return main;
};

export default Main;
