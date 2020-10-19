import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import LoggedOut from "./src/screens/LoggedOut";
import LogIn from "./src/screens/LogIn";
import ForgotPassword from "./src/screens/ForgotPassword";

// import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
// import AppWithNavigationState from "./src/navigators/AppNavigator";

// Adding the app navigator
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ForgotPassword />
      </Provider> 
    );
  }
}
