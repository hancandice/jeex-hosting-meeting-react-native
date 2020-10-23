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
import HeartButton from "../buttons/HeartButton";
import Stars from "../Stars";
import colors from "../../styles/colors";

export default class Listings extends Component {
  constructor(props) {
    super(props);
    this.renderListings = this.renderListings.bind(this);
  }

  get randomColor() {
    const colorsList = [
      colors.grey04,
      colors.darkOrange,
      colors.black,
      colors.brown01,
      colors.blue,
      colors.brown02,
      colors.green01,
      colors.green02,
    ];
    return colorsList[Math.floor(Math.random() * colorsList.length)];
  }

  renderListings() {
    const { listings, showAddToFav } = this.props;
    return listings.map((listing, index) => (
      <TouchableHighlight style={styles.card} key={`listing-${index}`}>
        <View style={styles.cardContent}>
          {showAddToFav ? (
            <View style={styles.addToFavoriteBtn}>
              <HeartButton
                color={colors.white}
                selectedColor={colors.darkOrange}
              />
            </View>
          ) : null}
          <Image
            style={styles.image}
            resizeMode="contain"
            source={listing.photo}
          />
          <Text style={[{ color: this.randomColor }, styles.listingTitle]}>
            {listing.title}
          </Text>
          <Text style={styles.listingHeader} numberOfLines={2}>
            {listing.header}
          </Text>
          <Text style={styles.listingPrice}>
            {listing.price}€ {listing.priceType}
          </Text>
          <Stars votes={listing.stars} size={10} color={colors.green02} />
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    const { title, boldTitle } = this.props;
    const titleStyle = boldTitle
      ? { fontSize: 22, fontWeight: "600" }
      : { fontSize: 18 };
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[titleStyle, styles.title]}>{title}</Text>
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
    marginBottom: 40,
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
  listingTitle: {
    fontWeight: "700",
    fontSize: 12,
  },
  listingHeader: {
    fontWeight: "700",
    fontSize: 14,
    color: colors.grey04,
    marginTop: 2,
  },
  addToFavoriteBtn: {
    position: "absolute",
    right: 12,
    top: 7,
    zIndex: 2,
  },
  listingPrice: {
    color: colors.grey04,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: "300",
  },
});
