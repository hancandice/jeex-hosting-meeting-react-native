import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../styles/colors";
import NavBarButton from "../components/buttons/NavBarButton";

export default class Welcome extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {},
    // headerBackImage: <Image />,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {},
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green01,
    alignItems: "center",
    justifyContent: "center",
  },
});
