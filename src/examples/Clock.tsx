
import React from 'react';

function FormattedDate(props: any) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export class Clock extends React.Component<any,any> {
  timerID: any;

  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

