import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../Login.css';

interface State {
  username: string;
  password: string;
}

@inject('store')
@observer
export default class Login extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  public render() {
    if (this.props.store.isLoggedIn) {
      return <Redirect to="/home" push={true} />;
    }
    return (
      <div className="login-root">
        <Grid container={true} justify="center">
          <Grid item={true} xs={12}>
            <h1 className="centered login-title">Login</h1>
          </Grid>
          <Grid item={true} xs={12} className="centered">
            <TextField
              label="Username"
              value={this.state.username}
              onChange={e => this.handleChange('username')(e.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item={true} xs={12} className="centered">
            <TextField
              label="Password"
              value={this.state.password}
              type="password"
              onChange={e => this.handleChange('password')(e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item={true} xs={12} className="centered">
            <Button
              raised={true}
              color="primary"
              onClick={() =>
                this.props.store.validateUser(
                  this.state.username,
                  this.state.password
                )
              }
            >
              Login
            </Button>
          </Grid>
          <div className="centered registration-link">
            <small>
              Not yet a user? Register <Link to="/register">here</Link>
            </small>
          </div>
        </Grid>
      </div>
    );
  }

  private handleChange = (name: string) => (value: string) => {
    if (name === 'username') {
      return this.setState({
        username: value
      });
    }
    return this.setState({
      password: value
    });
  };
}
