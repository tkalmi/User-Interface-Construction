import * as React from 'react';
import Appointment from '../types/Appointment';

interface Props {
  appointment: Appointment;
}

const AppointmentComponent = (props: Props): JSX.Element => {
  const { title, date, time, location } = props.appointment;
  return (
    <div>
      <p>{date.format('dddd DD.MM.YYYY')}</p>
      <p>{time}</p>
      <p>{title}</p>
      <p>{location}</p>
      <a
        target="_blank"
        href={
          'https://www.google.com/maps/search/?api=1&query=' +
          encodeURIComponent(location)
        }
      >
        Map
      </a>
    </div>
  );
};

export default AppointmentComponent;
