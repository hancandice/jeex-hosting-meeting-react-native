// react-navigation library & react-navigation-redux-helpers => to connect the navigation to the redux store.
// 1. stack navigator - when the user is logged out
// 2. tab navigator - when the user logged in
// create a reducer to change screen

// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addNavigationHelpers } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import LoggedOut from "../screens/LoggedOut";
// import LogIn from "../screens/LogIn";
// import ForgotPassword from "../screens/ForgotPassword";

// export const AppNavigator = createStackNavigator({
//   LoggedOut: { screen: LoggedOut },
//   LogIn: { screen: LogIn },
//   ForgotPassword: { screen: ForgotPassword },
// });

// const AppWithNavigationState = ({ dispatch, nav, listener }) => (
//   <AppNavigator
//     navigation={addNavigationHelpers({
//       dispatch,
//       state: nav,
//       addListener: listener,
//     })}
//   />
// );

// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
