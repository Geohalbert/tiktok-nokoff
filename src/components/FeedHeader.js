import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function FeedHeader(props) {
  const { onSelect, options, selectedValue } = props;

  const selectedTextStyles = [styles.buttonText, styles.selectedText];
  const unselectedTextStyles = [styles.buttonText, styles.unselectedText];

  const onPress = value => {
    if (selectedValue === value) {
      // deselect selected value
      onSelect();
    } else {
      // set selected value to value
      onSelect(value);
    }
  };

  const buttons = options.map(option => {
    // if option is selected, push 'selected' to styles array
    const textStylesArr =
      option.value === selectedValue
        ? selectedTextStyles
        : unselectedTextStyles;

    return (
      <View key={"option" + option.value}>
        <TouchableOpacity onPress={() => onPress(option.value)}>
          <Text style={textStylesArr}>{option.text}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>{buttons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.5,
    padding: 5
  },
  container: {
    alignSelf: "center",
    height: "10%",
    marginTop: "5%",
    position: "absolute",
    width: 300,
    zIndex: 10
  },
  selectedText: {
    fontSize: 20,
    opacity: 1
  },
  unselectedText: {
    fontSize: 18,
    opacity: 0.5
  }
});
