import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('#root')
  );
};

if (module.hot) {
  module.hot.accept();
}

render();

registerServiceWorker();
