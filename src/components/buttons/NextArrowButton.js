import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba(255,255,255,0.2)" }
      : { backgroundColor: "rgba(255,255,255,0.4)" };
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={[opacityStyle, styles.button]}
          onPress={handleNextButton}
          disabled={disabled}
        >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          ></Icon>
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  icon: {},
});
