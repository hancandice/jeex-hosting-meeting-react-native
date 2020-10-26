import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View,
} from "react-native";
import iPhoneSize from "../../helpers/utils";

// =========== responsive design ============

const size = iPhoneSize(); // large, small, medium
let cardSize = 100;
let cardMargin = 8;

if (size === "small") {
  cardSize = 90;
  cardMargin = 4;
} else if (size === "large") {
  cardSize = 110;
}

// =========== end of responsive design ============

export default class Categories extends Component {
  constructor(props) {
    super(props);
    // alert(iPhoneSize());
  }

  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => (
      <TouchableHighlight style={styles.card} key={`category-item-${index}`}>
        <Image source={category.photo} style={styles.image} />
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
