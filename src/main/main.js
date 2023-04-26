import TextArea from '../components/textarea/textarea';
import Wrapper from '../components/wrapper/wrapper';
import Keyboard from '../components/keyboard/keyboard';

const getContent = () => {
  const wrapper = Wrapper();
  const textArea = TextArea();
  wrapper.append(textArea);
  wrapper.append(Keyboard());
  return wrapper;
};

const Main = () => {
  const main = document.createElement('main');
  main.append(getContent());
  return main;
};

export default Main;
