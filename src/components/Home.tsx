import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import '../Home.css';

@inject('store')
@observer
export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="home-root">
        <Grid container={true} justify="center">
          <Grid item={true} xs={12}>
            <h1 className="home-title">Main Menu</h1>
          </Grid>
          <Grid item={true} xs={12}>
            <div className="home-link">
              <Link to="/appointments">
                <Button raised={true} color="primary">
                  Appointments
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
