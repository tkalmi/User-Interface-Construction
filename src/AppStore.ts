import { observable, action } from 'mobx';
import * as moment from 'moment';
import Appointment from './types/Appointment';
import * as shortid from 'shortid';

class AppStore {
  @observable username: String = 'user';
  @observable password: String = 'pw';
  @observable isLoggedIn: boolean = false;
  @observable
  appointments: Array<Appointment> = [
    {
      id: '001',
      title: 'Checkup with Gary',
      date: moment('2017/12/11', 'YYYY/MM/DD'),
      time: '14:30-15:00',
      location: 'University College Hospital, London'
    },
    {
      id: '002',
      title: 'Colonoscopy with Bertha',
      date: moment('2017/12/21', 'YYYY/MM/DD'),
      time: '12:00-13:30',
      location: 'University College Hospital, London'
    },
    {
      id: '003',
      title: 'Heart surgery with A.A. Ron',
      date: moment('2017/12/21', 'YYYY/MM/DD'),
      time: '18:00-18:30',
      location: 'University College Hospital, London'
    }
  ];

  @action
  validateUser(formUser: string, formPassword: string): void {
    if (this.username === formUser && this.password === formPassword) {
      this.isLoggedIn = true;
    }
  }

  @action
  addAppointment(time: string, date: moment.Moment, title: string) {
    const appointment: Appointment = {
      id: shortid.generate(),
      title,
      date,
      time,
      location: 'University College Hospital, London'
    };
    this.appointments.push(appointment);
  }
}

export default AppStore;
