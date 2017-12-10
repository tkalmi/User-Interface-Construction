import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Appointment from '../types/Appointment';
import AppointmentComponent from './AppointmentComponent';

@inject('store')
@observer
class AppointmentList extends React.Component<any, {}> {
  public componentWillMount() {
    if (!this.props.store.isLoggedIn) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div>
        <h1>Appointments</h1>
        <Link to="/home">Back to menu</Link>
        {this.props.store.appointments.map((appointment: Appointment) => (
          <AppointmentComponent
            appointment={appointment}
            key={appointment.id}
          />
        ))}
      </div>
    );
  }
}

export default AppointmentList;
