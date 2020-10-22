import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import colors from "../../styles/colors";

export default class Listings extends Component {
  renderListings() {
    const { listings } = this.props;
    return listings.map((listing, index) => (
      <TouchableHighlight style={styles.card} key={`listing-${index}`}>
        <View style={styles.cardContent}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={listing.photo}
          />
          <Text>{listing.header}</Text>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
            <Icon name="angle-right" size={18} color={colors.grey04} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={{ paddingRight: 30 }}
        >
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 21,
    paddingRight: 21,
  },
  title: {
    color: colors.grey04,
  },
  seeAllBtn: {
    marginTop: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeAllBtnText: {
    color: colors.grey04,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: "column",
    minHeight: 100,
  },
  cardContent: {},
  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 5,
    marginBottom: 7,
  },
});
