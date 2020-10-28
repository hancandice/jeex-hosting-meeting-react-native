import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";

export default class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleCheckmarkValue: new Animated.Value(1),
    };
    this.scaleCheckmark = this.scaleCheckmark.bind(this);
  }

  scaleCheckmark(value) {
    Animated.timing(this.state.scaleCheckmarkValue, {
      toValue: value,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {
      backgroundColor,
      borderColor,
      selectedBackgroundColor,
      selectedBorderColor,
      selected,
      iconColor,
    } = this.props;
    const background = selected ? selectedBackgroundColor : backgroundColor;
    const border = selected ? selectedBorderColor : borderColor;

    const iconScale = this.state.scaleCheckmarkValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.01, 1.6, 1],
    });

    const scaleValue = selected ? 1 : 0;
    this.scaleCheckmark(scaleValue);

    return (
      <View
        style={[
          { backgroundColor: background, borderColor: border },
          styles.wrapper,
        ]}
      >
        <Animated.View
          style={[{ transform: [{ scale: iconScale }] }, styles.iconWrapper]}
        >
          <Ionicons name="md-checkmark" color={iconColor} size={20} />
        </Animated.View>
      </View>
    );
  }
}

RadioInput.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  selectedBackgroundColor: PropTypes.string.isRequired,
  selectedBorderColor: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  iconColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    marginTop: 2,
  },
});
