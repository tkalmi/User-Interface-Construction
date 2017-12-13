import * as React from 'react';
import Message from '../types/Message';
import Card, { CardContent } from 'material-ui/Card';
import '../Chat.css';

interface Props {
  message: Message;
  assistantName: string;
}

const SingleMessage = (props: Props): JSX.Element => {
  const { text, sender, date, time } = props.message;
  const color = sender === props.assistantName ? '#fdf5e6' : '#f0ffff';
  const alignRight = sender !== props.assistantName;
  return (
    <Card className="message-card" style={{ backgroundColor: color }}>
      <CardContent>
        <div className="datetimeblock">
          <span className="dateText">{date}</span>
          <span className="timeText">{time}</span>
        </div>
        <p style={{ textAlign: alignRight ? 'right' : 'left' }}>{text}</p>
        <div
          className="senderBlock"
          style={{ textAlign: alignRight ? 'right' : 'left' }}
        >
          <h5>{sender}</h5>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleMessage;
