import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MyClassComponent_Task16_17 from "../Components/MyClassComponent_Task16_17";

const Task16_17 = () => {
  const [toggle, setToggle] = useState(false);

  function onButtonPress() {
    setToggle(!toggle);
  }

  return (
    <View style={styles.container}>
      <Button title={toggle ? "Hide" : "Show"} onPress={onButtonPress} />
      <MyClassComponent_Task16_17 isVisible={toggle} />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Task16_17;
