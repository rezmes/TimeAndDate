// src/webparts/TimeAndDate/components/TimeAndDate.tsx
import * as React from "react";

export interface ITimeAndDateState {
  time: Date;
}

class TimeAndDate extends React.Component<{}, ITimeAndDateState> {
  private timerID: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount(): void {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  tick(): void {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
        <p>{this.state.time.toLocaleDateString()}</p>
      </div>
    );
  }
}

export default TimeAndDate;
