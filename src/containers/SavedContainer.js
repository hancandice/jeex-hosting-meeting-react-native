import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NoResults from "../components/saved/NoResults";
import colors from "../styles/colors";

export default class SavedContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFindStores = this.handleFindStores.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "SAVED",
  };

  handleFindStores() {
    const { navigate } = this.props.navigation;
    navigate("Explore");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <NoResults handleFindStores={this.handleFindStores} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    backgroundColor: colors.white,
  },
});
