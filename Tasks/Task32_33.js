import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Video from "react-native-video";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [loading, setLoading] = useState(true);

  const handlePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoContainer} onPress={handlePress} activeOpacity={1}>
        {loading && <ActivityIndicator size="large" color="#fff" style={styles.loader} />}
        <Video
          ref={videoRef}
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          style={styles.video}
          poster="https://www.w3schools.com/html/pic_trulli.jpg" 
          posterResizeMode="cover"
          paused={paused}
          resizeMode="contain"
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          controls={false} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  videoContainer: {
    width: "90%",
    height: 250,
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default VideoPlayer;
