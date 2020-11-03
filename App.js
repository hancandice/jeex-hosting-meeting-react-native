import "react-native-gesture-handler";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import { Block } from "./src/components";
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
import SignUp from "./src/screens/SignUp";
// // ======== End of Inbox Tab Nav ==========
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";
import LoggedIn from "./src/screens/LoggedIn";
import LoggedInTabNavigator from "./src/navigators/LoggedInTabNavigator";
import TurnOnNotifications from "./src/screens/TurnOnNotifications";
import CreateList from "./src/screens/CreateList";
import colors from "./src/styles/colors";
import { StatusBar, Image } from "react-native";
import { theme } from "./src/data/constants";
const RootStack = createStackNavigator();

const images = [
  require("./src/data/assets/icons/back.png"),
  require("./src/data/assets/icons/plants.png"),
  require("./src/data/assets/icons/seeds.png"),
  require("./src/data/assets/icons/flowers.png"),
  require("./src/data/assets/icons/sprayers.png"),
  require("./src/data/assets/icons/pots.png"),
  require("./src/data/assets/icons/fertilizers.png"),
  require("./src/data/assets/images/plants_1.png"),
  require("./src/data/assets/images/plants_2.png"),
  require("./src/data/assets/images/plants_3.png"),
  require("./src/data/assets/images/explore_1.png"),
  require("./src/data/assets/images/explore_2.png"),
  require("./src/data/assets/images/explore_3.png"),
  require("./src/data/assets/images/explore_4.png"),
  require("./src/data/assets/images/explore_5.png"),
  require("./src/data/assets/images/explore_6.png"),
  require("./src/data/assets/images/avatar.png"),
];

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  handleResourcesAsync = async () => {
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Welcome"
            mode="modal"
            screenOptions={{
              headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.white,
                borderBottomColor: "transparent",
                elevation: 0,
              },
              headerBackImage: () => (
                <Image source={require("./src/data/assets/icons/back.png")} />
              ),
              headerBackTitle: () => null,
              headerLeftContainerStyle: {
                alignItems: "center",
                marginLeft: theme.sizes.base * 2,
                paddingRight: theme.sizes.base,
              },
              headerRightContainerStyle: {
                alignItems: "center",
                paddingRight: theme.sizes.base,
              },
              cardStyle: { backgroundColor: colors.white },
            }}
          >
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
              name="DeuxiemeLogin"
              component={DeuxiemeLogin}
              options={DeuxiemeLogin.navigationOptions}
            />
            <RootStack.Screen
              name="Browse"
              component={Browse}
              options={Browse.navigationOptions}
            />
            <RootStack.Screen
              name="SignUp"
              component={SignUp}
              options={SignUp.navigationOptions}
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
