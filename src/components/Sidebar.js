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
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function Sidebar({ video, toggle }) {
  return (
    <View styles={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity style={styles.sidebarButton}>
          <FontAwesome
            style={styles.fontAwe}
            name="heart"
            size={35}
            color={Colors.white}
          />
          <Text style={styles.text}>{video.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={toggle}>
          <FontAwesome
            style={styles.fontAwe}
            name="comment"
            size={35}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <FontAwesome
            style={styles.fontAwe}
            name="share"
            size={35}
            color={Colors.white}
          />
          <Text style={styles.text}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://avatars0.githubusercontent.com/u/30065225?s=400&u=0aaf41155e41dc380b0871dae665f30f5bf0fc5a&v=4"
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontAwe: { alignSelf: "center" },
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue",
    position: "absolute",
    height: height,
    width: width,
    zIndex: 5
  },
  image: {
    borderRadius: 30,
    height: 35,
    width: 35
  },
  sidebarButton: {
    backgroundColor: "brown",
    flexDirection: "column",
    height: 60,
    width: 60,
    zIndex: 12
  },
  text: {
    color: Colors.white,
    padding: 5
  }
});
