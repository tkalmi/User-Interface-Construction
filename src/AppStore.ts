import { observable, action } from 'mobx';
import Appointment from './types/Appointment';

class AppStore {
  @observable username: String = 'user';
  @observable password: String = 'pw';
  @observable isLoggedIn: boolean = false;
  @observable
  appointments: Array<Appointment> = [
    {
      id: '001',
      title: 'Checkup with Gary',
      date: 'Monday 27.07.2018',
      time: '14:30 - 15:00',
      location: 'University College Hospital, London'
    },
    {
      id: '002',
      title: 'Colonoscopy with Bertha',
      date: 'Wednesday 27.12.2017',
      time: '12:00 - 13:30',
      location: 'University College Hospital, London'
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
