import React from 'react';

function FormattedDate(props: any) {
  return (
    <h2>
      {props.date.hours + props.date.days * 24}:{props.date.minutes < 10 ? '0' + props.date.minutes : props.date.minutes}:{props.date.seconds < 10 ? '0' + props.date.seconds : props.date.seconds}
    </h2>
  );
}

export class Clock extends React.Component<any, any> {
  timerID: any;

  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.getTimeRemaining('2019-10-10 09: 00: 00'),
    });
  }

  getTimeRemaining(endtime) {
    var t = Date.parse(new Date(endtime).toString()) - Date.parse(new Date().toString());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
