import React, { Component } from "react";
import { Text } from "react-native";

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = { displayText: "Hello" };
  }

  updateText = (newText) => {
    this.setState({ displayText: newText });
  };

  render() {
    return <Text >{this.state.displayText}</Text>;
  }
}

export default MyClassPage;
