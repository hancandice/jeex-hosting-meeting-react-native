import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "EXPLORE",
  };
  render() {
    return (
      <View>
        <Text>Explore Container</Text>
      </View>
    );
  }
}
