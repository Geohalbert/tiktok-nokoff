import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { header } from "../styles/header";

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
      <View style={styles.buttonContainer}>{buttons}</View>
    </View>
  );
}

const styles = StyleSheet.create(header);
