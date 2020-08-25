import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import FeedDetails from "../components/FeedDetails";
import Sidebar from "../components/Sidebar";
// import BottomModal from "../modals/BottomModal";
import { Video } from "expo-av";
// import useModal from "../utils/useModal";
const { height, width } = Dimensions.get("window");
function FeedScreen({ video, play }) {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.uri }}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={play}
        style={styles.video}
      />
      <Sidebar video={video} />
      <FeedDetails video={video} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: -1
  },
  video: {
    backgroundColor: "#fff",
    height,
    position: "absolute",
    width,
    zIndex: -1
  }
});

export default FeedScreen;
