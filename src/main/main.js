/* eslint-disable import/extensions */
import './main.scss';
import TextArea from '../components/textarea/textarea.js';
import Button from '../components/button/button.js';
import Wrapper from '../components/wrapper/wrapper.js';
import data from './buttons.json';

const getButtons = () => {
  const div = document.createElement('div');
  data.forEach((x) => {
    const content = x.writeable ? x.shiftKey : x.key;
    const classList = ['button', 'button__offset'];
    if (!x.writeable) {
      classList.push('button__functional');
    }
    const button = Button({ content, classList });
    div.append(button);
  });
  return div;
};

const getButtonsContainer = () => {
  const container = getButtons();
  container.classList.add('buttons');
  return container;
};

const getContent = () => {
  const wrapper = Wrapper();
  const textArea = TextArea();
  wrapper.append(textArea);
  wrapper.append(getButtonsContainer());
  return wrapper;
};

const Main = () => {
  const main = document.createElement('main');
  main.append(getContent());
  return main;
};

export default Main;
