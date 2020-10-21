import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "PROFILE",
  };
  render() {
    return (
      <View>
        <Text>Profile Container</Text>
      </View>
    );
  }
}
