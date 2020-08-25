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
        style={{
          width: "100%",
          height: "100%"
        }}
      />
      <Sidebar video={video} />
      <FeedDetails video={video} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    flex: 0,
    height: height,
    width: width,
    zIndex: 0
  },
  modal: {
    flex: 1,
    zIndex: 40,
    height: height,
    width: width
  }
});

export default FeedScreen;
