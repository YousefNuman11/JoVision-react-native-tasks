import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";


class MyClassPage extends Component {

  render(){

    return(
      <View style={styles.container}>
      <Text>Hi MyClassPage</Text>
      </View>
    )


  }
}

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

export default MyClassPage;
