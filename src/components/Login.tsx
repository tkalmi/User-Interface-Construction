import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
      <form noValidate={true} autoComplete="off">
        <TextField
          label="Username"
          value={this.state.username}
          onChange={e => this.handleChange('username')(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Password"
          value={this.state.password}
          type="password"
          onChange={e => this.handleChange('password')(e.target.value)}
          margin="normal"
        />
        <Button
          onClick={() =>
            this.props.store.validateUser(
              this.state.username,
              this.state.password
            )
          }
        >
          Submit
        </Button>
      </form>
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
