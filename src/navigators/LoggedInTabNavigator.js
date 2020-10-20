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

const Tab = createBottomTabNavigator();

export default function LoggedInTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Explore") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Inbox") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        fontWeight: "600",
      }}
    >
      <Tab.Screen name="Explore" component={ExploreContainer} />
      <Tab.Screen name="Inbox" component={InboxContainer} />
      <Tab.Screen name="Profile" component={ProfileContainer} />
      <Tab.Screen name="Saved" component={SavedContainer} />
      <Tab.Screen name="Trips" component={TripsContainer} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
