import React, { Component } from "react";
import colors from "../styles/colors";
import { transparentHeaderStyle } from "../styles/navigation";
import LoggedInTabNavigator from "../navigators/LoggedInTabNavigator";
import NavBarButton from "../components/buttons/NavBarButton";

export default class LoggedIn extends Component {
  static navigationOptions = () => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    headerLeft: null,
    gestureEnabled: false,
    elevation: 0,
  });

  render() {
    return <LoggedInTabNavigator />;
  }
}
