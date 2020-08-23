import React from "react";
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

const height = Dimensions.get("window").height;
const Sidebar = ({ video }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sidebarButton}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="heart"
          size={35}
          color={Colors.white}
        />
        <Text style={styles.text}>{video.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="comment"
          size={35}
          color={Colors.white}
        />
        <Text style={styles.text}>{video.comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <FontAwesome
          style={{ alignSelf: "center" }}
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
  );
};
export default Sidebar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    height: height / 2,
    justifyContent: "space-between",
    marginBottom: 90,
    paddingLeft: 20,
    position: "absolute",
    right: 5,
    zIndex: 1
  },
  image: {
    borderRadius: 30,
    height: 35,
    width: 35
  },
  sidebarButton: {
    flexDirection: "column",
    marginTop: 10,
    padding: 10
  },
  text: {
    color: Colors.white,
    padding: 5
  }
});
