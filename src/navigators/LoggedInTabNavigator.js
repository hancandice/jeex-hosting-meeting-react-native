import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreContainer from "../containers/ExploreContainer";
import InboxContainer from "../containers/InboxContainer";
import ProfileContainer from "../containers/ProfileContainer";
import SavedContainer from "../containers/SavedContainer";
import TripsContainer from "../containers/TripsContainer";
import colors from "../styles/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default function LoggedInTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Explore") {
            iconName = focused ? "ios-compass" : "ios-search";
          } else if (route.name === "Inbox") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Profile") {
            iconName = focused ? "md-contact" : "md-person";
          } else if (route.name === "Saved") {
            iconName = focused ? "md-add-circle" : "md-add-circle-outline";
          } else if (route.name === "Trips") {
            iconName = focused ? "ios-walk" : "ios-body";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.green01,
        inactiveTintColor: colors.grey,
        labelStyle: { fontWeight: "600", marginBottom: 3 },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreContainer}
        options={ExploreContainer.navigationOptions}
      />
      <Tab.Screen
        name="Saved"
        component={SavedContainer}
        options={SavedContainer.navigationOptions}
      />
      <Tab.Screen
        name="Trips"
        component={TripsContainer}
        options={TripsContainer.navigationOptions}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxContainer}
        options={InboxContainer.navigationOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={ProfileContainer.navigationOptions}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
