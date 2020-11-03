import React, { Component } from "react";
import { Button, Block, Text, Input } from "../components";
import NavBarButton from "../components/buttons/NavBarButton";
import colors from "../styles/colors";
import {
  Modal,
  Dimensions,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
  Image,
  Animated,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { theme } from "../data/constants";

import user from "../data/user.json";

const VALID_EMAIL = user.email;
const VALID_PASSWORD = user.password;

export default class DeuxiemeLogin extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
  });

  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();

    this.setState({ loading: true });

    setTimeout(() => {
      if (email !== VALID_EMAIL) {
        errors.push("email");
      }
      if (password !== VALID_PASSWORD) {
        errors.push("password");
      }

      this.setState({ errors, loading: false });

      if (!errors.length) {
        navigation.navigate("TurnOnNotifications");
      }
    }, 3000);
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[theme.sizes.base * 4, theme.sizes.base * 2]}>
          <Text h1 bold>
            로그인
          </Text>
          <Block middle>
            <Input
              label="이메일"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              secure
              label="비밀번호"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  로그인
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                비밀번호를 잊으셨나요?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
