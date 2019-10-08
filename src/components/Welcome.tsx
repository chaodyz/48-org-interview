import React from 'react';
import { Clock } from '../examples/Clock';

interface Props {
  name: string
}

interface State {

}

class Welcome extends React.Component<Props, any> {
  render() {
    return <div><h1>Hello, {this.props.name} </h1><Clock /></div> ;
  }
}

export default Welcome;

// export default function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }