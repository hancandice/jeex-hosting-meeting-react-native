import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import LoggedOut from "./src/screens/LoggedOut";
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";
import LoggedIn from "./src/screens/LoggedIn";
import TurnOnNotifications from "./src/screens/TurnOnNotifications";
import { create } from "react-test-renderer";
import { transparentHeaderStyle } from "./src/styles/navigation";
import colors from "./src/styles/colors";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    // StatusBar.setBarStyle("light-content", true);
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoggedOut">
            <Stack.Screen
              name="Home"
              component={LoggedOut}
              options={LoggedOut.navigationOptions}
            />
            <Stack.Screen
              name="Login"
              component={LogIn}
              options={LogIn.navigationOptions}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={ForgotPassword.navigationOptions}
            />
            <Stack.Screen
              name="LoggedIn"
              component={LoggedIn}
              options={LoggedIn.navigationOptions}
            />
            <Stack.Screen
              name="TurnOnNotifications"
              component={TurnOnNotifications}
              options={TurnOnNotifications.navigationOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
