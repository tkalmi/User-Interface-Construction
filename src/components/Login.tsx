import * as React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

interface State {
  username: string;
  password: string;
}

export default class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (name: string) => (value: string) => {
    if (name === 'username') {
      return this.setState({
        username: value
      });
    }
    return this.setState({
      password: value
    });
  };

  render() {
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
        <Button onClick={() => console.log('u wot m8')}>Submit</Button>
      </form>
    );
  }
}
