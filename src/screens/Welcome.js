import React, { Component } from "react";
import { Button, Block, Text } from "../components";
import NavBarButton from "../components/buttons/NavBarButton";
import colors from "../styles/colors";
import {
  Modal,
  Dimensions,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import { theme } from "../data/constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = () => ({
    // headerStyle: {},
    // headerBackImage: <Image />,
    // headerBackTitle: null,
    // headerLeftContainerStyle: {},
    // headerRightContainerStyle: {},
    title: "",
    borderBottomWidth: 0,
    headerTransparent: true,
    headerTintColor: colors.white,
    elevation: 0,
  });

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false,
  };

  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>
          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              ante in lacus finibus pellentesque eu vel risus. Nunc ac nunc a
              neque tincidunt condimentum in id dolor. Curabitur vitae finibus
              magna. Cras nec velit interdum, ultricies urna nec, tincidunt
              nunc. Cras id odio enim. Praesent in tincidunt tortor, at mattis
              lacus. Etiam efficitur vel enim sed hendrerit. Vestibulum at
              fermentum dolor, scelerisque vulputate dolor. Mauris placerat non
              libero eget blandit. Donec porta, risus eget tristique
              ullamcorper, risus massa posuere enim, id varius sapien ante ut
              risus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Cras consectetur id eros sed iaculis. Aliquam nunc arcu,
              aliquam eu diam non, scelerisque mattis elit. Nulla consectetur
              iaculis ligula, sed maximus velit bibendum vitae. In convallis
              erat ipsum, nec euismod ante mollis et. Nam interdum est sed
              convallis iaculis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              ante in lacus finibus pellentesque eu vel risus. Nunc ac nunc a
              neque tincidunt condimentum in id dolor. Curabitur vitae finibus
              magna. Cras nec velit interdum, ultricies urna nec, tincidunt
              nunc. Cras id odio enim. Praesent in tincidunt tortor, at mattis
              lacus. Etiam efficitur vel enim sed hendrerit. Vestibulum at
              fermentum dolor, scelerisque vulputate dolor. Mauris placerat non
              libero eget blandit. Donec porta, risus eget tristique
              ullamcorper, risus massa posuere enim, id varius sapien ante ut
              risus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Cras consectetur id eros sed iaculis. Aliquam nunc arcu,
              aliquam eu diam non, scelerisque mattis elit. Nulla consectetur
              iaculis ligula, sed maximus velit bibendum vitae. In convallis
              erat ipsum, nec euismod ante mollis et. Nam interdum est sed
              convallis iaculis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              ante in lacus finibus pellentesque eu vel risus. Nunc ac nunc a
              neque tincidunt condimentum in id dolor. Curabitur vitae finibus
              magna. Cras nec velit interdum, ultricies urna nec, tincidunt
              nunc. Cras id odio enim. Praesent in tincidunt tortor, at mattis
              lacus. Etiam efficitur vel enim sed hendrerit. Vestibulum at
              fermentum dolor, scelerisque vulputate dolor. Mauris placerat non
              libero eget blandit. Donec porta, risus eget tristique
              ullamcorper, risus massa posuere enim, id varius sapien ante ut
              risus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Cras consectetur id eros sed iaculis. Aliquam nunc arcu,
              aliquam eu diam non, scelerisque mattis elit. Nulla consectetur
              iaculis ligula, sed maximus velit bibendum vitae. In convallis
              erat ipsum, nec euismod ante mollis et. Nam interdum est sed
              convallis iaculis.
            </Text>
          </ScrollView>
          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: this.scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      />
    );
  }
  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          return (
            <Block
              animated
              flex={false}
              color="whitesmoke"
              key={`step-${index}`}
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    const { navigation } = this.props;
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold style={{ marginTop: theme.sizes.padding / 2 }}>
            세상을 연결하는{" "}
            <Text h1 primary>
              열쇠
            </Text>
          </Text>
          <Text h1 center bold primary>
            LINKEY
          </Text>
          <Text h4 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Open up a new world.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("DeuxiemeLogin")}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button
            onPress={() =>
              this.setState({
                showTerms: true,
              })
            }
          >
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../data/assets/images/linkey_symbol.png") },
    { id: 2, source: require("../data/assets/images/linkey_symbol2.png") },
    { id: 3, source: require("../data/assets/images/linkey_symbol3.png") },
  ],
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
