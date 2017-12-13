import * as React from 'react';
import SingleMessage from './SingleMessage';
import Message from '../types/Message';
import { inject, observer } from 'mobx-react';
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import DoneIcon from 'material-ui-icons/Done';
import BackIcon from 'material-ui-icons/ArrowBack';
import '../general.css';


@inject('store')
export default class Chat extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event: any, value: number) => {
    if (value === 0) {
      this.props.history.goBack();
      return;
    }
    this.props.history.push('/home');
  }

  // make this a grid and then render each message as a single grid item?
  public render() {
    return (
      <div>
        <div className="messageList">
        {this.props.store.chatLog.map((m: Message) => (
          <SingleMessage message={m} assistantName="Bot"/>
        ))}
        </div>
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels={true}
          className="bottomNav"
        >
          <BottomNavigationButton label="Go Back" icon={<BackIcon />} />
          <BottomNavigationButton label="Done" icon={<DoneIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}
