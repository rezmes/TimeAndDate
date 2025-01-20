// src/webparts/TimeAndDate/components/TimeAndDate.tsx
import * as React from "react";
import * as moment from "moment-jalaali";
export interface ITimeAndDateState {
  time: Date;
}
class TimeAndDate extends React.Component<{}, ITimeAndDateState> {
  private timerID: number;
  constructor(props: {}) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount(): void {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }
  tick(): void {
    this.setState({ time: new Date() });
  }
  render() {
    const jDate = moment(this.state.time).format("jYYYY/jM/jD");
    return (
      <div>
        {" "}
        <h1>{this.state.time.toLocaleTimeString()}</h1> <p>{jDate}</p>{" "}
      </div>
    );
  }
}
export default TimeAndDate;
