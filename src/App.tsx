import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route path="/*" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
