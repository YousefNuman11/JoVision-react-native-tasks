import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, StyleSheet } from "react-native";

const MyFunctionPage = forwardRef((props, ref) => {
    const [displayText, setDisplayText] = useState("Hello");
  
    
    useImperativeHandle(ref, () => ({
      updateText: (newText) => setDisplayText(newText),
    }));
  
    return <Text>{displayText}</Text>; 
  });

export default MyFunctionPage