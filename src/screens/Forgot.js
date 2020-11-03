import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Block, Button, Input, Text } from "../components";
import { theme } from "../data/constants";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";
import NavBarButton from "../components/buttons/NavBarButton";

export default class Forgot extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
    headerRight: () => (
      <NavBarButton
        location="right"
        color={colors.white}
        text="Welcome"
        handleButtonPress={() => navigation.navigate("Welcome")}
      />
    ),
  });

  render() {
    return (
      <Block center middle>
        <Text>Forgot</Text>
      </Block>
    );
  }
}
