import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View,
} from "react-native";

export default class Categories extends Component {
  constructor(props) {
    super(props);
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
    width: 100,
    height: 100,
    marginRight: 8,
    marginLeft: 8,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
