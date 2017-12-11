import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

interface State {
  title: string;
}

@inject('store')
@observer
class ReservationDialog extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { title: '' };
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        onRequestClose={() => this.props.onRequestClose()}
      >
        <DialogTitle>Reserve time</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write the title for the appointment, and select a suitable timeslot.
          </DialogContentText>
          <TextField
            margin="dense"
            id="title"
            label="Appointment title"
            type="title"
            fullWidth={true}
            onChange={event => this.setState({ title: event.target.value })}
          />
          {['10:30-11:00', '13:30-14:00', '14:00-14:30'].map((time: string) => (
            <div key={time}>
              <span>{time}</span>
              <Button
                raised={true}
                onClick={() => {
                  this.props.store.addAppointment(
                    time,
                    this.props.selectedDate,
                    this.state.title
                  );
                  this.setState({ title: '' });
                  this.props.onRequestClose();
                }}
              >
                Reserve
              </Button>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onRequestClose()} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ReservationDialog;
