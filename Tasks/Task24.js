import React, {useRef, useState} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MyFunctionPage from "../Components/MyClassComponent_Task24";

const Task24 = () => {
    const childRef = useRef(null);
    const [text, setText] = useState("");

    const handleChange = (newText) => {
        setText(newText);
        if(childRef.current){
            childRef.current.updateText(newText);
        }
    };

    return(
        <View>
        <TextInput 
        placeholder="Type something here..."
        onChangeText={handleChange}
        />
        <MyFunctionPage ref={childRef}  />
        </View>
    )

}
export default Task24