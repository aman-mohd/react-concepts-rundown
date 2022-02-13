import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleInc = this.handleInc.bind(this);
    this.handleRst = this.handleRst.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc() {
    this.setState({ count: this.state.count + 1 });
  }

  handleRst() {
    this.setState({ count: 0 });
  }

  handleDec() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h2>Class Counter: {this.state.count}</h2>
        <button onClick={this.handleDec}> Decrease</button>
        <button onClick={this.handleRst}> Reset</button>
        <button onClick={this.handleInc}> Increase</button>
      </>
    );
  }
}

export default ClassCounter;
