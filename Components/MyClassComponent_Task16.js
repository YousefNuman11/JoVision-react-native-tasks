import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MyClassComponent_Task16 = ({ isVisible }) => {
  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.demoText}>Yousef Safwan A. Al-Numan</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  demoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MyClassComponent_Task16;
