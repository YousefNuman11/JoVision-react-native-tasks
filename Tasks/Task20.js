import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task20"; 

const Task20 = () => {
  const [toggle, setToggle] = useState(false);

  function onButtonPress() {
    setToggle(!toggle); 
  }

  return (
    <View style={styles.container}>
      <Button title={toggle ? "Hide" : "Show"} onPress={onButtonPress} />
      {toggle && <MyClassPage />}
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

export default Task20;
