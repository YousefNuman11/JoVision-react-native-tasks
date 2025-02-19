import React, { useEffect } from "react";
import { Text, View } from "react-native";

const MyFunctionPage = () => {

  useEffect(() => {
    console.log("Component loaded");

    return() =>{
        console.log("Component unloaded");
    };
  },[]);

  return (
    <View >
      <Text>Hi from MyFunctionPage</Text>
    </View>
  );
};

export default MyFunctionPage;
