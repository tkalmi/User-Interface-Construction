import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AppointmentList from './components/AppointmentList';
import TimeReservation from './components/TimeReservation';
import Registration from './components/Registration';
import Chat from './components/Chat';
import Home from './components/Home';
import UpdateData from './components/UpdateData';
import Help from './components/Help';
import AppBar from './components/AppBar';

const App = (): JSX.Element => {
  return (
    <AppBar>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/register" component={Registration} />
          <Route exact={true} path="/chat" component={Chat} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/help" component={Help} />
          <Route
            exact={true}
            path="/appointments"
            component={AppointmentList}
          />
          <Route path="/update" component={UpdateData} />
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
