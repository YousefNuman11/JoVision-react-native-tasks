import React, { useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';

const images = {
  1: require('../Image/image1.png'),
  2: require('../Image/image2.png'),
  3: require('../Image/image3.jpeg'),
};

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(images[1]);

  const choose = () => {
    Alert.alert(
      'Choose an Image',
      'Pick a number: 1, 2, or 3',
      [
        { text: '1', onPress: () => setSelectedImage(images[1]) },
        { text: '2', onPress: () => setSelectedImage(images[2]) },
        { text: '3', onPress: () => setSelectedImage(images[3]) },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Press to Choose Image" onPress={choose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task27;
