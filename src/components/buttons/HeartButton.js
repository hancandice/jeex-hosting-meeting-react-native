import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { color } from "react-native-reanimated";

export default class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = { addedToFavorite: false };
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  addToFavorite() {
    const { onPress } = this.props;
    this.setState(
      {
        addedToFavorite: !this.state.addedToFavorite,
      }
      // () => {
      //   onPress && onPress();
      // }
    );
    onPress();
  }

  render() {
    const { addedToFavorite } = this.state;
    const { color, selectedColor, onPress } = this.props;
    return (
      <TouchableOpacity onPress={this.addToFavorite}>
        <View>
          <Icon
            name={addedToFavorite ? "heart" : "heart-o"}
            size={18}
            color={addedToFavorite ? selectedColor : color}
            style={styles.addToFavIcon}
          />
          <Icon
            name="heart-o"
            size={18}
            color={color}
            style={[
              { display: addedToFavorite ? "flex" : "none" },
              styles.selectedColor,
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  addToFavIcon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 10,
  },
  selectedColor: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});

HeartButton.propTypes = {
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  // itemId: PropTypes.number.isRequired,
};
