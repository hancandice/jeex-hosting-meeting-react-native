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
} from "react-native";
import { theme } from "../data/constants";

export default class DeuxiemeLogin extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
  });

  state = {
    email: "user@linkey.com",
    password: "pass12345",
    errors: [],
    loading: false,
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password, errors } = this.state;
    this.setState({ loading: true });

    if (email !== "user@linkey.com") {
      errors.push("email");
    }
    if (password !== "pass12345") {
      errors.push("password");
    }

    if (errors.length) {
      this.setState({ errors, loading: false });
    } else {
      this.setState({ loading: false });
      navigation.navigate("TurnOnNotifications");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[theme.sizes.base * 4, theme.sizes.base * 2]}>
          <Text h1 bold>
            로그인
          </Text>
          <Block middle>
            <Input
              label="이메일"
              style={styles.input}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              secure
              label="비밀번호"
              style={styles.input}
              defaultValue={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              <Text bold white center>
                로그인
              </Text>
            </Button>

            <Button onPress={() => {}}>
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
});
