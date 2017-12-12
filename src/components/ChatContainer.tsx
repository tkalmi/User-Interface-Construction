import * as React from 'react';
import SingleMessage from './SingleMessage';
import Message from '../types/Message';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class ChatContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  // make this a grid and then render each message as a single grid item?
  public render() {
    return (
      <div>
        <h1>Chat Container</h1>
        {this.props.store.registrationLog.map((m: Message) => (
          <SingleMessage message={m} />
        ))}
      </div>
    );
  }
}
