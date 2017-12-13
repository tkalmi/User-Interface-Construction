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
import Grid from 'material-ui/Grid';
import '../ReservationDialog.css';

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
          <div className="reservation-times">
            {['10:30-11:00', '13:30-14:00', '14:00-14:30'].map(
              (time: string) => (
                <Grid key={time} container={true} justify="center">
                  <Grid item={true} xs={6} className="time-text">
                    {time}
                  </Grid>
                  <Grid item={true} xs={6} className="align-right">
                    <Button
                      className="float-right"
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
                  </Grid>
                </Grid>
              )
            )}
          </div>
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
