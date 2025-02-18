import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task19";

const Task19 = () => {
  const [toggle, setToggle] = useState(false);

  function onButtonPress() {
    setToggle(!toggle);
  }

  return (
    <View style={styles.container}>
      <Button title={toggle ? "Hide" : "Show"} onPress={onButtonPress} />
      <MyClassPage isVisible={toggle} />
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

export default Task19;
