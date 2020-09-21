import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import colors from "../styles/colors";
import { StyleSheet, Text, View, Image } from "react-native";
import RoundedButton from "../components/buttons/RoundedButton";

export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/jeex-logo.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to Jeex.</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40,
  },
});
