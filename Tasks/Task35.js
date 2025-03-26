import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userInfo');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const storedTime = new Date(parsedData.timestamp);
          const currentTime = new Date();
          
          if ((currentTime - storedTime) / 1000 < 60) { 
            setName(parsedData.name);
            setAge(parsedData.age);
            setCountry(parsedData.country);
          }
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load data');
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !age || !country) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    const userInfo = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };
    
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      Alert.alert('Success', 'Data saved successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
      console.error('Error saving data:', error);
    }
  };

  return (
    <View >
      <TextInput
       
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Task35;
