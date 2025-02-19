import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

class MyClassPage extends Component {
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        onChangeText={this.props.onTextChange} // Calling the parent function
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 5,
  },
});

export default MyClassPage;
