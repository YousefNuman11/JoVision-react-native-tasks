import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const MyClassComponent_Task16 = () => {

    consst [Text, setText] = useState('Text for')

    return (
        
        <View style={styles.container}>
            <Text style={styles.demoText}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
      flex: 1
    },
    demoText: {
        fontSize: 15
    }
})

export default MyClassComponent_Task16