import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import AddIcon from 'material-ui-icons/NoteAdd';
import BackIcon from 'material-ui-icons/ArrowBack';
import Appointment from '../types/Appointment';
import AppointmentComponent from './AppointmentComponent';
import '../general.css';

@inject('store')
@observer
class AppointmentList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0
    };
  }
  public componentWillMount() {
    if (!this.props.store.isLoggedIn) {
      this.props.history.push('/login');
    }
  }

  handleChange = (event: any, value: number) => {
    if (value === 0) {
      this.props.history.goBack();
      return;
    }
    this.props.history.push('/timeReservation');
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Appointments</h1>
        <div className="messageList">
          {this.props.store.appointments.map((appointment: Appointment) => (
            <AppointmentComponent
              appointment={appointment}
              key={appointment.id}
            />
          ))}

          <BottomNavigation
            value={this.state.value}
            onChange={this.handleChange}
            showLabels={true}
            className="bottomNav"
          >
            <BottomNavigationButton label="Go Back" icon={<BackIcon />} />
            <BottomNavigationButton
              label="Make a new appointment"
              icon={<AddIcon />}
            />
          </BottomNavigation>
        </div>
      </div>
    );
  }
}

export default AppointmentList;
