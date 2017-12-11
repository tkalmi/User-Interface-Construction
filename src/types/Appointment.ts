import { Moment } from 'moment';

type Appointment = {
  id: string;
  title: string;
  date: Moment;
  time: string;
  location: string;
};

export default Appointment;
