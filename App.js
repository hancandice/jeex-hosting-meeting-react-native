import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "@react-navigation/native";
import LoggedOut from "./src/screens/LoggedOut";
// ============ Inbox Tab Nav =============
import Welcome from "./src/screens/Welcome";
import DeuxiemeLogin from "./src/screens/DeuxiemeLogin";
import Explore from "./src/screens/Explore";
import Browse from "./src/screens/Browse";
import Products from "./src/screens/Products";
import Settings from "./src/screens/Settings";
// // ======== End of Inbox Tab Nav ==========
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";
import LoggedIn from "./src/screens/LoggedIn";
import LoggedInTabNavigator from "./src/navigators/LoggedInTabNavigator";
import TurnOnNotifications from "./src/screens/TurnOnNotifications";
import CreateList from "./src/screens/CreateList";
import colors from "./src/styles/colors";
import { StatusBar } from "react-native";

const RootStack = createStackNavigator();

export default class App extends Component {
  render() {
    // StatusBar.setBarStyle("light-content", true);
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Home" mode="modal">
            <RootStack.Screen
              name="Home"
              component={LoggedOut}
              options={LoggedOut.navigationOptions}
            />
            <RootStack.Screen
              name="Welcome"
              component={Welcome}
              options={Welcome.navigationOptions}
            />
            <RootStack.Screen
              name="Login"
              component={LogIn}
              options={LogIn.navigationOptions}
            />
            <RootStack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={ForgotPassword.navigationOptions}
            />
            <RootStack.Screen
              name="LoggedIn"
              component={LoggedIn}
              options={LoggedIn.navigationOptions}
            />
            <RootStack.Screen
              name="CreateList"
              component={CreateList}
              options={CreateList.navigationOptions}
            />
            <RootStack.Screen
              name="TurnOnNotifications"
              component={TurnOnNotifications}
              options={TurnOnNotifications.navigationOptions}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
