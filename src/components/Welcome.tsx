import React from 'react';

interface Props {
  name: string
}

interface State {

}

class Welcome extends React.Component<Props, any> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;

// export default function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }