import { StyleSheet, Text, View } from "react-native";

const MyClassComponent_Task18 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Yousef Safwan A. Al-Numan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MyClassComponent_Task18;
