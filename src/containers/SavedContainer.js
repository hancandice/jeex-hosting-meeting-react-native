import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "SAVED",
  };
  render() {
    return (
      <View>
        <Text>Saved Container</Text>
      </View>
    );
  }
}