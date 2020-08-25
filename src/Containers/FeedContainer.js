import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import ViewPager from "@react-native-community/viewpager";
import FeedScreen from "../components/FeedScreen";
import db from "../../db.json";
const { height, width } = Dimensions.get("window");
const FeedContainer = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <ViewPager
        onPageSelected={e => {
          setActive(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={{ flex: 1 }}
        initialPage={0}
      >
        {db.videos.map(item => (
          <View key={item.id}>
            <FeedScreen video={item} play={Number(item.id) === active} />
          </View>
        ))}
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    height: height,
    position: "absolute",
    width: width,
    zIndex: 0
  }
});

export default FeedContainer;
