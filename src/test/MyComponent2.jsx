import React from "react";

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "value",
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ key: this.state.key + "1" })}>
          {this.state.key}
        </button>
      </div>
    );
  }
}
export { MyComponent2 };
