import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreContainer from "../containers/ExploreContainer";
import colors from "../styles/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import CreateList from "../screens/CreateList";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

export default class ExploreStackNav extends Component {
  static navigationOptions = {
    tabBarLabel: "EXPLORE",
  };
  render() {
    // StatusBar.setBarStyle("light-content", true);
    return (
      <Stack.Navigator initialRouteName="CreateList">
        <Stack.Screen
          name="ExploreContainer"
          component={ExploreContainer}
          options={ExploreContainer.navigationOptions}
        />
        <Stack.Screen
          name="CreateList"
          component={CreateList}
          options={CreateList.navigationOptions}
        />
      </Stack.Navigator>
    );
  }
}
