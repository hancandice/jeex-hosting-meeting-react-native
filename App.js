import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import React, { Component } from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
// ========== Apollo ===========
import { ApolloProvider, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloClient } from "@apollo/client/core";
import { NETWORK_INTERFACE } from "./src/config";
import { gql } from "@apollo/client";
// ========== End of Apollo ===========
import { theme } from "./src/data/constants";
import store from "./src/redux/store";
import Browse from "./src/screens/Browse";
import CreateList from "./src/screens/CreateList";
import DeuxiemeLogin from "./src/screens/DeuxiemeLogin";
import Forgot from "./src/screens/Forgot";
import ForgotPassword from "./src/screens/ForgotPassword";
import LoggedIn from "./src/screens/LoggedIn";
import LoggedOut from "./src/screens/LoggedOut";
// // ======== End of Inbox Tab Nav ==========
import LogIn from "./src/screens/LogIn";
import SignUp from "./src/screens/SignUp";
import TurnOnNotifications from "./src/screens/TurnOnNotifications";
// ============ Inbox Tab Nav =============
import Welcome from "./src/screens/Welcome";
import colors from "./src/styles/colors";
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

const apolloClient = new ApolloClient({
  uri: NETWORK_INTERFACE,
  cache: new InMemoryCache(),
});

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
        <ApolloProvider client={apolloClient}>
          <NavigationContainer>
            <RootStack.Navigator
              initialRouteName="Home"
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
                name="Forgot"
                component={Forgot}
                options={Forgot.navigationOptions}
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
        </ApolloProvider>
      </Provider>
    );
  }
}
