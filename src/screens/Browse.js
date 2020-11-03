import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Block } from "../components";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";
import NavBarButton from "../components/buttons/NavBarButton";
import iPhoneSize from "../helpers/utils";

// =========== responsive design ============

const size = iPhoneSize(); // large, small, medium

let headingTextSize = 28;
if (size === "small") {
  headingTextSize = 22;
} else if (size === "large") {
  headingTextSize = 34;
}

// =========== end of responsive design ============

export default class Browse extends Component {
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
        <Text>Browse</Text>
      </Block>
    );
  }
}
