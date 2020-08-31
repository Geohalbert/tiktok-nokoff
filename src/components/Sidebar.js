import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { Colors } from "../styles/colors";
import TouchableIcon from "./TouchableIcon";

// export default function Sidebar({ video, toggle, modalContent }) {
export default function Sidebar({ video }) {
  return (
    <View style={styles.container}>
      <TouchableIcon iconName={"heart"} iconText={video.likes} onPress={null} />
      {/* <TouchableIcon iconName={"comment"} iconText={null} onPress={toggle} /> */}
      <TouchableIcon iconName={"comment"} iconText={null} onPress={null} />
      <TouchableIcon iconName={"share"} iconText={"Share"} onPress={null} />
      <TouchableOpacity style={styles.touchableIcon}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/30065225?s=400&u=0aaf41155e41dc380b0871dae665f30f5bf0fc5a&v=4"
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    paddingRight: 0,
    paddingTop: 20,
    zIndex: 10,
    bottom: 10,
    right: 10
  },
  image: {
    borderRadius: 20,
    height: 35,
    width: 35
  },
  touchableIcon: {
    flexDirection: "column",
    paddingTop: 10
  }
});
