import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";

import Constants from "expo-constants";

export default function BottomNav({
  isDark,
  isVisible,
  toggleDark,
  toggleVisibility
}) {
  const styleTypes = ["default", "dark-content", "light-content"];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {isVisible ? "Visible" : "Hidden"}
        </Text>
      </View>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={!isVisible} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Toggle StatusBar Visibility"
          onPress={toggleVisibility}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Dark Mode" onPress={toggleDark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ECF0F1",
    padding: 8,
    zIndex: -2
  },
  buttonContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: "center"
  }
});

export default App;
