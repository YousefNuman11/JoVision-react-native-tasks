import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MyFunctionPage = ({ onTextChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Type something here..."
      onChangeText={onTextChange} // Update the parent text
    />
  );
};

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

export default MyFunctionPage;
