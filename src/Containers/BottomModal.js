import React from "react";
import Modal from "react-native-modalbox";
import Comment from "../components/Comment";

import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Colors } from "../styles/colors";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function BottomModal({ isShowing, hide, comments }) {
  const BContent = (
    <TouchableOpacity style={styles.sidebarButton}>
      <FontAwesome
        style={{ alignSelf: "center" }}
        name="times"
        size={35}
        color={Colors.black}
      />
    </TouchableOpacity>
  );

  const renderList = comments.map((comment, index) => (
    <Comment comment={comment} key={index} />
  ));

  const commentHeader = (
    <View style={styles.header}>
      <View style={styles.headerItem}>
        <Text>sfdgsdg</Text>
      </View>
      <View style={styles.headerItem}>
        <Text>{comments.length} Comments</Text>
      </View>
      <View style={styles.headerItem}>
        <Button title="X" color="white" onPress={hide} />
      </View>
    </View>
  );
  return (
    <View style={styles.wrapper}>
      {isShowing === true && (
        <Modal
          backdrop={true}
          backdropPressToClose={false}
          backdropContent={BContent}
          backdropOpacity={0.5}
          backdropColor={"black"}
          style={styles.modal}
          position={"bottom"}
          swipeArea={20}
          swipeToClose={true}
          onClick={hide}
          isOpen={isShowing}
          backdropPressToClose={true}
        >
          {commentHeader}
          <ScrollView style={{ width: width }}>{renderList}</ScrollView>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    height: height / 2,
    position: "absolute",
    width: width,
    zIndex: 5
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: 800,
    zIndex: 6,
    backgroundColor: "grey"
  },

  btn: {
    margin: 10,
    color: "white",
    padding: 10
  },

  btnModal: {
    zIndex: 10,
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "red",
    fontSize: 22,
    zIndex: 6
  },
  header: {
    width: width,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6
  }
});
