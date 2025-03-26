import React, { createContext, useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const SharedTextContext = createContext();


const SharedTextProvider = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <SharedTextContext.Provider value={{ text, setText }}>
      {children}
    </SharedTextContext.Provider>
  );
};


class ComponentOne extends React.Component {
  static contextType = SharedTextContext;

  render() {
    return <Text style={styles.text}>{this.context.text}</Text>;
  }
}


const ComponentTwo = () => {
  const { text, setText } = useContext(SharedTextContext);

  return (
    <View style={styles.componentContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type something..."
      />
      <ComponentOne />
    </View>
  );
};

const Task38 = () => {
  return (
    <SharedTextProvider>
      <View style={styles.container}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </SharedTextProvider>
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

export default Task38;
