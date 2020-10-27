import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

export default class CreateList extends Component {
  static navigationOptions = ({ navigation }) => ({
    animationEnabled: true,
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
  });
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Create List</Text>
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
