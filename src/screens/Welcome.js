import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Block, Text } from "../components";
import colors from "../styles/colors";
import NavBarButton from "../components/buttons/NavBarButton";

export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => ({
    // headerStyle: {},
    // headerBackImage: <Image />,
    // headerBackTitle: null,
    // headerLeftContainerStyle: {},
    // headerRightContainerStyle: {},
  });

  render() {
    return (
      <Block center middle>
        <Block center middle flex={0.3}>
          <Text h1>세상을 연결하는 </Text>
          <Text h1>열쇠</Text>
        </Block>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
