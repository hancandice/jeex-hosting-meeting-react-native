import React, { Component } from "react";
import colors from "../styles/colors";
import { transparentHeaderStyle } from "../styles/navigation";
import LoggedInTabNavigator from "../navigators/LoggedInTabNavigator";

/*   static navigationOptions = ({ navigation }) => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    headerRight: () => (
      <NavBarButton
        location="right"
        color={colors.white}
        text="Log In"
        handleButtonPress={() => navigation.navigate("Login")}
      />
    ),
  }); */

export default class LoggedIn extends Component {
  render() {
    return <LoggedInTabNavigator />;
  }
}
