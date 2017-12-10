import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AppointmentList from './components/AppointmentList';
import Home from './components/Home';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/appointments" component={AppointmentList} />
        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
