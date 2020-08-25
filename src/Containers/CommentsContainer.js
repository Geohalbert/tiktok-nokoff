import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import Comment from "../components/Comment";
import { Colors } from "../styles/colors";

const { height, width } = Dimensions.get("window");
const CommentsContainer = props => {
  const { commentsArr } = props;
  console.log(`commentsContainer loaded`);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{commentsArr.length} Comments</Text>
      <ScrollView>
        {commentsArr.map((comment, index) => (
          <Comment comment={comment} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    zIndex: 12
  },
  header: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: "normal",
    padding: 5,
    textAlign: "center"
  },
  scrollView: {
    borderColor: Colors.primaryGray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2
  }
});

export default CommentsContainer;
