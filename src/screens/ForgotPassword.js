import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";

export default class ForgotPassword extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.form}>
          <Text style={styles.forgotPasswordHeading}>Forgot Password ?</Text>
          <Text style={styles.forgotPasswordSubheading}>
            Enter your email to find your account.
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01,
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
  },
  forgotPasswordSubheading: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
});
