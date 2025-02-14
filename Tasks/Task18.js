import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MyClassComponent_Task18 from "../Components/MyClassComponent_Task18";

const Task18 = () => {
  const [Loading, setLoading] = useState(true);


  function Time(){
    
    const timer = setTimeout(() => {

      setLoading(false);
    }, 5000);
  }

  useEffect(() => {
    Time();
  }, []);


return (
  <View style={styles.container}>
    {Loading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    ) : (
      <MyClassComponent_Task18 />
    )}
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
  },
});


export default Task18;
