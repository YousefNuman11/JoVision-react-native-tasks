import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task23";

const Task23 = () => {
  const [text, setText] = useState("Hello");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyClassPage onTextChange={setText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Task23;
