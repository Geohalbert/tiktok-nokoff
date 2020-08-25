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
      <View>{buttons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center"
  },
  container: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    height: "10%",
    marginTop: "5%",
    position: "absolute",
    top: 30,
    zIndex: 10
  },
  selectedText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5
  },
  unselectedText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "normal",
    padding: 5
  }
});
