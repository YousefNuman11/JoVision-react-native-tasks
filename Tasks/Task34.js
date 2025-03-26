import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from '../Components/MyClassComponent_Task34';

const TimeComponent = () => {
  const currentTime = useCurrentTime();

  return (
    <View >
      <Text >
        Time: {currentTime.toLocaleTimeString()}
      </Text>
      <Text>
        Date: {currentTime.toDateString()}
      </Text>
    </View>
  );
};

const Task34 = () => {
  const [showTime, setShowTime] = useState(true);

  return (
    <View >
      <Button title="Toggle Time" onPress={() => setShowTime(!showTime)} />
      {showTime && <TimeComponent />}
    </View>
  );
};

export default Task34;
