import React, { Component } from "react";
import { PropTypes } from "prop-types";
import colors from "../styles/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions } from "@react-navigation/compat";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { StatusBar } from "react-native";

const navigateToTabsAction = NavigationActions.navigate({
  routeName: "LoggedIn",
});

export default class TurnOnNotifications extends Component {
  static navigationOptions = () => ({
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    headerLeft: null,
    gestureEnabled: false,
    elevation: 0,
  });

  constructor(props) {
    super(props);
    this.state = {
      pressNotifyBtn: false,
      pressSkipBtn: false,
    };
    this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(
      this
    );
    this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(
      this
    );
    this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
    this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
  }

  handleNotifyBtnHideUnderlay() {
    this.setState({
      pressNotifyBtn: false,
    });
  }
  handleNotifyBtnShowUnderlay() {
    this.setState({
      pressNotifyBtn: true,
    });
  }
  handleSkipBtnHideUnderlay() {
    this.setState({
      pressSkipBtn: false,
    });
  }
  handleSkipBtnShowUnderlay() {
    this.setState({
      pressSkipBtn: true,
    });
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    const { pressNotifyBtn, pressSkipBtn } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Icon name="comments-o" size={46} style={styles.icon} />
          <Text style={styles.title}>알림 켜기</Text>
          <Text style={styles.description}>
            누군가 회원님께 메시지를 보냈을 때나 기타 다른 중요한 계정 활동에
            관한 알림을 받을 수 있습니다.
          </Text>
          <TouchableHighlight
            style={[
              {
                backgroundColor: pressNotifyBtn
                  ? colors.green02 // underlayColor 속성값이 우선적으로 적용
                  : colors.green01,
              },
              styles.notifyButton,
            ]}
            onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
            onShowUnderlay={this.handleNotifyBtnShowUnderlay}
            onHideUnderlay={this.handleNotifyBtnHideUnderlay}
            underlayColor={colors.green02}
          >
            <Text style={[styles.buttonText, { color: colors.white }]}>
              네, 알림을 켤게요
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              {
                backgroundColor: pressSkipBtn
                  ? colors.lightGrey02 // underlayColor 속성값이 우선적으로 적용
                  : "transparent",
              },
              styles.skipButton,
            ]}
            onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
            onShowUnderlay={this.handleSkipBtnShowUnderlay}
            onHideUnderlay={this.handleSkipBtnHideUnderlay}
            underlayColor={colors.lightGrey02}
          >
            <Text style={[styles.buttonText, { color: colors.green01 }]}>
              다음에 할게요
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: colors.green01,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    paddingRight: 30,
    marginTop: 15,
    lineHeight: 22,
  },
  notifyButton: {
    width: 160,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
  skipButton: {
    borderColor: colors.green01,
    width: 160,
    borderWidth: 2,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 15,
  },
});

TurnOnNotifications.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
};
