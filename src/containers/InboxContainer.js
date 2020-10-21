import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "INBOX",
  };
  render() {
    return (
      <View>
        <Text>Inbox Container</Text>
      </View>
    );
  }
}
