import React, { Component } from "react";
import { Image, LogBox, StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "../components/explore/Categories";
import Listings from "../components/explore/Listings";
import SearchBar from "../components/SearchBar";
import categoriesList from "../data/categories";
import listings from "../data/listings";
import colors from "../styles/colors";
import { graphql, useQuery } from "react-apollo";
import { gql } from "@apollo/client";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "EXPLORE",
  };

  constructor(props) {
    super(props);
    this.state = {
      favoriteListings: [],
    };

    this.onCreateListClose = this.onCreateListClose.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.handleAddToFav = this.handleAddToFav.bind(this);
  }
  handleAddToFav(listing) {
    // Navigate to the CreateList route with params
    const { navigate } = this.props.navigation;
    let { favoriteListings } = this.state;
    const index = favoriteListings.indexOf(listing.id);
    if (index > -1) {
      favoriteListings = favoriteListings.filter((item) => item !== listing.id);
      this.setState({ favoriteListings });
    } else {
      navigate("CreateList", {
        listing,
        onCreateListClose: this.onCreateListClose,
      });
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favoriteListings } = this.state;

    if (listCreated) {
      favoriteListings.push(listingId);
    } else {
      favoriteListings = favoriteListings.filter((item) => item !== listingId);
    }
    this.setState({ favoriteListings });
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
          favoriteListings={this.state.favoriteListings}
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

const ListingsQuery = gql`
  query {
    multipleListing {
      _id
      title
      description
    }
  }
`;

const ExploreContainerWrapper = graphql(ListingsQuery)(ExploreContainer);

export default ExploreContainer;
