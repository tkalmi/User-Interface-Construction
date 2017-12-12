import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AppointmentList from './components/AppointmentList';
import TimeReservation from './components/TimeReservation';
import Home from './components/Home';
import AppBar from './components/AppBar';

const App = (): JSX.Element => {
  return (
    <AppBar>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route
            exact={true}
            path="/appointments"
            component={AppointmentList}
          />
          <Route
            exact={true}
            path="/timeReservation"
            component={TimeReservation}
          />
          <Route path="/*" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppBar>
  );
};

export default App;
