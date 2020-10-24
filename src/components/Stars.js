import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import { View, Text, StyleSheet } from "react-native";

export default class Stars extends Component {
  get stars() {
    const { votes, size, color } = this.props;
    const starsNumber = parseInt(votes);
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Icon
          name="star"
          size={size}
          color={starsNumber >= (i + 1) * 10 ? color : colors.grey03}
          style={styles.star}
          key={`star-${i + 1}`}
        />
      );
    }
    return starElements;
  }

  render() {
    const { votes } = this.props;
    if (votes == "0") {
      return <View key={`stars-${votes.index}`}></View>;
    }
    return (
      <View style={styles.wrapper} key={`stars-${votes.index}`}>
        <View style={styles.stars}>{this.stars}</View>
        <Text style={styles.votesNumber}>{votes}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: { flexDirection: "row", alignItems: "center" },
  star: {
    marginRight: 1,
  },
  votesNumber: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 1,
    marginLeft: 3,
  },
});
