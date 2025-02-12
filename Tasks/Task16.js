import { Button, StyleSheet, View } from "react-native";
import MyClassComponent_Task16 from "../Components/MyClassComponent_Task16"

const Task16 = () => {

  function onButtonPress() {

  
  }
  
  return(
    <view style={style.container}>

      <Button 
      title={"Press me"}
      onPress={onButtonPress}
      ></Button>
      <MyClassComponent_Task16></MyClassComponent_Task16>
    </view>


  )
}
const style = StyleSheet.create({

  container: {
    flex: 1
  },
})
export default Task16