import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";
import SearchBar from "../components/SearchBar";
import Categories from "../components/explore/Categories";
import Listings from "../components/explore/Listings";
import categoriesList from "../data/categories";
import { ScrollView } from "react-native-gesture-handler";
import listings from "../data/listings";
import { StatusBar } from "react-native";

export default class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "EXPLORE",
  };

  constructor(props) {
    super(props);
    this.handleAddToFav = this.handleAddToFav.bind(this);
  }
  handleAddToFav() {
    // Navigate to the CreateList route with params
    const { navigate } = this.props.navigation;
    navigate("CreateList");
  }

  renderListings() {
    return listings.map((listing, index) => (
      <View key={`listing-${index}`}>
        <Listings
          key={`listing-item-${index}`}
          title={listing.title}
          boldTitle={listing.boldTitle}
          showAddToFav={listing.showAddToFav}
          listings={listing.listings}
          handleAddToFav={this.handleAddToFav}
        />
      </View>
    ));
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}
        >
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Explore</Text>
            <Image
              source={require("../img/linkey_logo_kr.png")}
              style={styles.headingLogo}
            />
          </View>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  scrollView: {
    paddingTop: 100,
  },
  headingWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.black02,
  },
  headingLogo: {
    position: "absolute",
    left: 105,
    bottom: 25,
    width: 65,
    height: 17,
  },
  categories: {
    marginTop: 5,
    marginBottom: 40,
  },
});
