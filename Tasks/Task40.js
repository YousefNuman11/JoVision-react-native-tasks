import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
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


class ComponentOne extends Component {
  handleTextChange = (newText) => {
    this.props.setText(newText);
  };

  render() {
    return (
      <View style={styles.componentContainer}>
        <TextInput
          style={styles.input}
          value={this.props.text}
          onChangeText={this.handleTextChange}
          placeholder="Type something..."
        />
        <Text style={styles.text}>Stored Text: {this.props.text}</Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({ text: state.text });
const mapDispatchToProps = { setText };

const ConnectedComponentOne = connect(mapStateToProps, mapDispatchToProps)(ComponentOne);


class Task40 extends Component {
  state = { isVisible: true };

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.state.isVisible && <ConnectedComponentOne />}
          <Button title={this.state.isVisible ? "Hide Component" : "Show Component"} onPress={this.toggleVisibility} />
        </View>
      </Provider>
    );
  }
}

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

export default Task40;