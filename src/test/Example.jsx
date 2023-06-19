import React from "react";

class Example extends React.Component {
  constructor(props) {
    console.log("begin component");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export { Example };
