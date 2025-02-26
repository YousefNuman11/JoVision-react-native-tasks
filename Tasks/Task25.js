import React, { useRef, useState } from "react";
import { View, TextInput} from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task25";

const Task25 = () => {
  const childRef = useRef(null); 
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText); 
    if (childRef.current) {
      childRef.current.updateText(newText); 
    }
  };

  return (
    <View >
      <TextInput
        placeholder="Type something here..."
        onChangeText={handleTextChange} 
      />
      <MyClassPage ref={childRef} />
    </View>
  );
};



export default Task25;
