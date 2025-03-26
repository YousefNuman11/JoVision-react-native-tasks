import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, RefreshControl } from 'react-native';


function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36_37 = () => {
  const [randomTexts, setRandomTexts] = useState(
    Array.from({ length: 100 }, () => generateRandomWord(8))
  );
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRandomTexts(Array.from({ length: 100 }, () => generateRandomWord(8)));
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View >
      <ScrollView
        
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {randomTexts.map((word, index) => (
          <Text key={index}>{word}</Text>
        ))}
      </ScrollView>
    </View>
  );
};


export default Task36_37;
