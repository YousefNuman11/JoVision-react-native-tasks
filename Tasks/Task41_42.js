import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ScreenComponent = ({ navigation, screenNumber }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24, marginBottom: 20 }}>Screen {screenNumber}</Text>
    {[1, 2, 3, 4].map(num => (
      num !== screenNumber && (
        <Button key={num} title={`Go to Screen ${num}`} onPress={() => navigation.navigate(`Screen ${num}`)} />
      )
    ))}
  </View>
);

const Screen1 = ({ navigation }) => <ScreenComponent navigation={navigation} screenNumber={1} />;
const Screen2 = ({ navigation }) => <ScreenComponent navigation={navigation} screenNumber={2} />;
const Screen3 = ({ navigation }) => <ScreenComponent navigation={navigation} screenNumber={3} />;
const Screen4 = ({ navigation }) => <ScreenComponent navigation={navigation} screenNumber={4} />;

export default function Task41_42() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={Screen1} />
        <Tab.Screen name="Screen 2" component={Screen2} />
        <Tab.Screen name="Screen 3" component={Screen3} />
        <Tab.Screen name="Screen 4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
