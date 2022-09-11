import ScrollBox from "./ScrollBox";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
