import * as React from 'react';
import { inject, observer } from 'mobx-react';
import * as moment from 'moment';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import Button from 'material-ui/Button';
import Appointment from '../types/Appointment';
import ReservationDialog from './ReservationDialog';
import '../TimeReservation.css';

interface State {
  selectedDate: moment.Moment;
  modalOpen: boolean;
}

@inject('store')
@observer
class TimeReservation extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: moment(),
      modalOpen: false
    };
  }

  public componentWillMount() {
    if (!this.props.store.isLoggedIn) {
      this.props.history.push('/login');
    }
  }

  public dateRender(current: moment.Moment, selectedDate: moment.Moment) {
    const isInAppointments: boolean = this.props.store.appointments.some(
      (appointment: Appointment) => current.isSame(appointment.date, 'day')
    );
    const isSelected: boolean = selectedDate.isSame(current, 'day');
    const className: string = `rc-calendar-date ${
      isInAppointments ? 'rc-calendar-has-appointment' : ''
    }`;
    return (
      <div
        className={className}
        aria-selected={isSelected}
        aria-disabled="false"
      >
        {current.date()}
      </div>
    );
  }

  public Footer() {
    return (
      <div>
        {this.props.store.appointments
          .filter((appointment: Appointment) =>
            this.state.selectedDate.isSame(appointment.date, 'day')
          )
          .sort((a: Appointment, b: Appointment) => {
            if (a.time < b.time) {
              return -1;
            }
            if (a.time > b.time) {
              return 1;
            }
            return 0;
          })
          .map((appointment: Appointment) => (
            <div key={appointment.id} className="rc-calendar-footer-row">
              <span className="rc-calendar-footer-time">
                {appointment.time}
              </span>
              <span className="rc-calendar-footer-title">
                {appointment.title}
              </span>
            </div>
          ))}
        <Button
          dense={true}
          raised={true}
          color="primary"
          onClick={() => this.setState({ modalOpen: true })}
        >
          Reserve time
        </Button>
      </div>
    );
  }

  public render() {
    return (
      <div>
        <h1>Time reservation</h1>
        <Button onClick={() => this.props.history.goBack()}>Go back</Button>
        <ReservationDialog
          open={this.state.modalOpen}
          selectedDate={this.state.selectedDate}
          onRequestClose={() => this.setState({ modalOpen: false })}
        />
        <Calendar
          defaultValue={moment()}
          dateInputPlaceholder={moment().format('DD/MM/YYYY')}
          dateRender={(current: moment.Moment, selectedDate: moment.Moment) =>
            this.dateRender(current, selectedDate)
          }
          onSelect={(date: moment.Moment) =>
            this.setState({ selectedDate: date })
          }
          renderFooter={() => this.Footer()}
          showToday={false}
        />
      </div>
    );
  }
}

export default TimeReservation;
