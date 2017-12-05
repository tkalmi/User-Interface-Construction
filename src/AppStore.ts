import { observable } from 'mobx';
import Appointment from './types/Appointment';

class AppStore {
  @observable username: String = 'user';
  @observable password: String = 'pw';
  @observable
  appointmentDates: Array<Appointment> = [
    {
      id: '001',
      title: 'checkup with Gary',
      date: '20171205',
      time: '1830'
    }
  ];
}

export default AppStore;
