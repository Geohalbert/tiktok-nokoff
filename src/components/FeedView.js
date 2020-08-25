import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Video } from "expo-av";
import FeedDetails from "./FeedDetails";
import Sidebar from "./Sidebar";
import BottomModal from "../Containers/BottomModal";

import useModal from "../utils/useModal";
const { height, width } = Dimensions.get("window");
const FeedView = ({ play, video }) => {
  const { isShowing, toggle } = useModal();
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
      <Sidebar video={video} toggle={toggle} />
      <FeedDetails video={video} />
      <View style={styles.modal}>
        <BottomModal
          isShowing={isShowing}
          hide={toggle}
          comments={video.comments}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    flex: 1,
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

export default FeedView;
