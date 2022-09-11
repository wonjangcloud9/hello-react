import { Component } from "react";

class Counter extends Component {
  state = { number: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <p>Count: {number}</p>
        <p>바뀌지 않는 값: {fixedNumber}</p>
        <button
          onClick={() => {
            this.setState((prev) => {
              return { number: prev.number + 1 };
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
