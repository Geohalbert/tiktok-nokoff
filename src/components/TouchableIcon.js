import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TouchableIcon(props) {
  const { onPress, iconText, iconName, color, ...rest } = props;

  return (
    <TouchableOpacity style={styles.touchableIcon} onPress={onPress}>
      <FontAwesome
        style={styles.fontAwe}
        name={iconName}
        size={35}
        color={"#fff"}
      />
      {iconText && <Text style={styles.text}>{iconText}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fontAwe: { alignSelf: "center" },
  touchableIcon: {
    flexDirection: "column",
    paddingTop: 10
  },
  text: {
    color: "#fff",
    paddingTop: 5
  }
});
