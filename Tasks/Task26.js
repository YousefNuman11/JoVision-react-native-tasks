import React, { useState } from "react";
import { Button, StyleSheet, View, Text, ActivityIndicator } from "react-native";


const Task26 = () => {
  const [ip, setIp] = useState("");
  const [blocking, setBlocking] = useState(false);

  const onNonBlocking = () => {
    fetch (`https://api.ipify.org/?format=json`)
    .then(response => response.json())
    .then(data => setIp(data.ip))  
  };

  const onBlocking = async () => {

    setBlocking(true);
    try{
        const response = await fetch (`https://api.ipify.org/?format=json`);
        const data = await response.json();
        setIp(data.ip);
    }catch(error){
        console.error("error in fecth");
    }finally{
        setBlocking(false)
    } 
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Your Ip:{ip || 'Press to fecth IP'}  </Text> 
      {blocking && <ActivityIndicator size="large" color="#0000ff" />} 
      <Button title={"fecth(nonBlocking)"} onPress={onNonBlocking} />
      <Button title={"fecth(with Block)"} onPress={onBlocking} disabled = {blocking} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Task26;
