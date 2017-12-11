import * as React from 'react';
import Appointment from '../types/Appointment';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
import '../AppointmentComponent.css';

interface Props {
  appointment: Appointment;
}

const AppointmentComponent = (props: Props): JSX.Element => {
  const { title, date, time, location } = props.appointment;
  return (
    <Card className="appointment-card">
      <CardContent>
        <p>{date.format('dddd DD.MM.YYYY')}</p>
        <p>{time}</p>
        <p>{title}</p>
        <p>{location}</p>
        <div className="appointment-card-button">
          <Button dense={true} color="primary">
            <a
              target="_blank"
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(location)
              }
            >
              Map
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentComponent;
