import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import UpdateData from './components/UpdateData';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route path="/update" component={UpdateData} />
        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
