import React from "react";

class ClassFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], time: new Date() };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const { data } = await response.json();
    this.setState({ users: data });
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleDelete(id) {
    const newArr = this.state.users.filter((item) => item.Population !== id);
    this.setState({ users: newArr });
  }

  tick() {
    this.setState({ time: new Date() });
  }

  getList() {
    return this.state.users.map((names, index) => (
      <li
        onClick={() => this.handleDelete(names.Population)}
        key={names.Population}
      >
        Population: {names.Population}
      </li>
    ));
  }

  render() {
    return (
      <>
        <h2>Class Fetch Network Fetch</h2>
        <ul>{this.getList()}</ul>
        <h2>Clock : {this.state.time.toLocaleTimeString()}</h2>
      </>
    );
  }
}

export default ClassFetch;
