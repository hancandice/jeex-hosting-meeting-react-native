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

export default class NoResults extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Saved</Text>
          <Text style={styles.description}>
            모든 날들이 반드시 특별하지만은 않지만, 특별할 내일을 위해 무언가를
            준비할 수는 있죠.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.highlightedDescription}>EXPLORE 탭</Text>에서
            가게의 우측 상단 하트를 꾹 ♥️ 눌러 당신만의{" "}
            <Text style={styles.highlightedDescription}>관심 가게 리스트</Text>
            를 만들 수 있어요.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.findStoresButton}>
            <Text style={styles.findStoresButtonText}>관심 가게 찾기</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 40,
    color: colors.grey04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.grey04,
    paddingLeft: 20,
    paddingRight: 20,
  },
  highlightedDescription: {
    fontWeight: "800",
    color: colors.green01,
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: 80,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.grey05,
    paddingLeft: 20,
    paddingRight: 20,
  },
  findStoresButton: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: colors.green01,
  },
  findStoresButtonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
});
