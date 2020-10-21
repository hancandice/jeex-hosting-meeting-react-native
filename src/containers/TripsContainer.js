import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "TRIPS",
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Trips Container</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 50,
  },
});
