import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';


const SET_TEXT = 'SET_TEXT';
const setText = (text) => ({ type: SET_TEXT, payload: text });


const initialState = { text: '' };
const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};


const store = createStore(textReducer);

const ComponentOne = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  return (
    <View style={styles.componentContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(newText) => dispatch(setText(newText))}
        placeholder="Type something..."
      />
      <Text style={styles.text}>Stored Text: {text}</Text>
    </View>
  );
};


const Task39 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {isVisible && <ComponentOne />}
        <Button title={isVisible ? "Hide Component" : "Show Component"} onPress={() => setIsVisible(!isVisible)} />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  componentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default Task39;
