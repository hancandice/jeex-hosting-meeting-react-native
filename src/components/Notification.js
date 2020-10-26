import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import colors from "../styles/colors";
import iPhoneSize from "../helpers/utils";

// =========== responsive design [not applied] ============

const size = iPhoneSize(); // large, small, medium

let notificationWidth = "100%";

if (size === "small") {
  notificationWidth = 320;
} else if (size === "large") {
  notificationWidth = 414;
}

// =========== end of responsive design ============

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(-60),
    };
    this.closeNotification = this.closeNotification.bind(this);
    this.animatedNotification = this.animatedNotification.bind(this);
  }
  animatedNotification(value) {
    const { positionValue } = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 400,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }
  closeNotification() {
    this.props.handleCloseNotification();
  }
  render() {
    const { type, firstLine, secondLine, showNotification } = this.props;
    showNotification
      ? this.animatedNotification(0)
      : this.animatedNotification(-60);
    const { positionValue } = this.state;

    return (
      <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessages}>{secondLine}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}
        >
          <Icon name="times" size={20} color={colors.lightGrey} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  errorText: {
    color: colors.darkOrange,
    fontWeight: "700",
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14,
  },
  closeButton: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});
