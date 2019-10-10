import React from 'react';
import { Clock } from './Clock';

interface Props {
  name: string;
}

interface State { }

export default class Welcome extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name} </h1>
        <p>This is it, see you next time!</p>
        <h2>Count Down: </h2>
        <Clock />
      </div>
    );
  }
}
