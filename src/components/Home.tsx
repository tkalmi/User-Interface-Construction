import * as React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
    if (!this.props.store.isLoggedIn) {
      this.props.history.push('/login');
    }
  }

  public render() {
    return (
      <div>
        <h1> Welcome home </h1>
      </div>
    );
  }
}
