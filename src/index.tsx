import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import App from './App';
import AppStore from './AppStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';

class Index extends React.Component {
  @observable store = new AppStore();
  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppContainer>
    <Index />
  </AppContainer>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
