import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Colors } from "../styles/colors";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
const Comment = ({ comment, key }) => {
  return (
    <View style={styles.container} key={"comment" + key}>
      <TouchableOpacity style={styles.avatar}>
        <Image style={styles.image} source={{ uri: comment.userAvatar }} />
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={styles.text}>{comment.username}</Text>
        <Text style={styles.text}>{comment.body}</Text>
      </View>
      <TouchableOpacity style={styles.likes}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="heart"
          size={35}
          color={Colors.black}
        />
        <Text style={styles.text}>{comment.likes}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Comment;
const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
    width: width,
    zIndex: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    borderRadius: 30,
    height: 35,
    width: 35
  },
  avatar: { width: width / 5 },
  text: {
    color: Colors.black
  },
  body: {
    height: height / 10,
    width: "auto",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    zIndex: 6,
    textAlign: "left"
  }
});
