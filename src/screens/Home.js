import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import ViewPager from "@react-native-community/viewpager";

import FeedHeader from "../components/FeedHeader";
import FeedView from "../components/FeedView";
import db from "../../db.json";
import { headerOptions } from "../constants";
const { height, width } = Dimensions.get("window");
export default function Home() {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      <FeedHeader
        options={headerOptions}
        selectedValue={tab}
        onSelect={setTab}
      />
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
            <FeedView video={item} play={Number(item.id) === active} />
          </View>
        ))}
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: "transparent"
  }
});
