import React, { Component } from "react";
import { Text, View } from "react-native";

class MyClassPage extends Component {

  componentDidMount(){

    console.log("Component loaded");

  }

  componentWillUnmount(){

    console.log("Component unloaded");

  }



  render() {
    return (
      <View>
        <Text>Hi from MyClassPage</Text>
      </View>
    );
  }
}

export default MyClassPage;
