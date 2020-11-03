import React, { Component } from "react";
import colors from "../styles/colors";
import { transparentHeaderStyle } from "../styles/navigation";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Button,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RoundedButton from "../components/buttons/RoundedButton";
import NavBarButton from "../components/buttons/NavBarButton";
import iPhoneSize from "../helpers/utils";

// =========== responsive design ============

const size = iPhoneSize(); // large, small, medium
let termsTextSize = 13;
let headingTextSize = 30;
if (size === "small") {
  termsTextSize = 12;
  headingTextSize = 26;
} else if (size === "large") {
  termsTextSize = 14;
  headingTextSize = 34;
}

// =========== end of responsive design ============

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
    headerRight: () => (
      <NavBarButton
        location="right"
        color={colors.white}
        text="Log In"
        handleButtonPress={() => navigation.navigate("Login")}
      />
    ),
  });

  onFacebookPress() {
    alert("Facebook button pressed");
  }
  onCreateAccountPress() {
    alert("Create account button pressed");
  }
  onMoreOptionsPress() {
    alert("More Options button pressed");
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/linkey.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to LINKEY.</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={
              <Icon
                name="facebook"
                size={20}
                style={styles.facebookButtonIcon}
              />
            }
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

          <TouchableOpacity
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
            activeOpacity={0.7}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableOpacity>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or{" "}
            </Text>
            <Text style={styles.termsText}>More options, </Text>
            <Text style={styles.termsText}>I agree to LINKEY's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </ScrollView>
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
    width: 70,
    height: 70,
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: "400",
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30,
  },
  termsText: {
    color: colors.white,
    fontSize: termsTextSize,
    fontWeight: "600",
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});
