import { observable, action } from 'mobx';
import Appointment from './types/Appointment';

class AppStore {
  @observable username: String = 'user';
  @observable password: String = 'pw';
  @observable isLoggedIn: boolean = true;
  @observable
  appointmentDates: Array<Appointment> = [
    {
      id: '001',
      title: 'checkup with Gary',
      date: '20171205',
      time: '1830'
    }
  ];

  @action
  validateUser(formUser: string, formPassword: string): void {
    if (this.username === formUser && this.password === formPassword) {
      this.isLoggedIn = true;
    }
  }
}

export default AppStore;
