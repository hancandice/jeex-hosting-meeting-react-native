import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import { TouchableHighlight } from "react-native-gesture-handler";
import RadioInput from "../components/form/RadioInput";
import RoundedButton from "../components/buttons/RoundedButton";

export default class CreateList extends Component {
  static navigationOptions = ({ navigation }) => ({
    animationEnabled: true,
    title: "",
    borderBottomWidth: 0,
    headerTintColor: colors.white,
    elevation: 0,
    headerLeft: () => (
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="md-close-circle" size={30} color={colors.green01} />
      </TouchableOpacity>
    ),
    headerStyle: styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      privacyOption: "public",

      location: props.route.params.listing.location,
      loading: false,
    };
    this.listCreated = false;
    this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCreateList = this.handleCreateList.bind(this);
  }

  //   =================================
  componentWillUnmount() {
    this.props.route.params.onCreateListClose(
      this.props.route.params.listing.id,
      this.listCreated
    );
  }
  //   =================================

  handleLocationChange(location) {
    this.setState({ location });
  }

  selectPrivacyOption(privacyOption) {
    this.setState({ privacyOption });
  }

  handleCreateList() {
    const { goBack } = this.props.navigation;
    this.setState({ loading: true });
    this.listCreated = true;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        goBack();
      });
    }, 3500);
  }

  render() {
    const { privacyOption, location, loading } = this.state;

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>관심 가게 리스트 만들기</Text>
          <View style={styles.content}>
            <View style={styles.inputWrapper}>
              <InputField
                labelText="제목"
                labelTextSize={18}
                labelTextWeight="400"
                labelColor={colors.grey04}
                textColor={colors.grey04}
                placeholder={location}
                value={location}
                showCheckmark={false}
                borderBottomColor={colors.lightGrey04}
                inputType="text"
                inputStyle={styles.inputStyle}
                autoFocus={true}
                autoCapitalize="none"
                onChangeText={this.handleLocationChange}
              />
            </View>
            <View style={styles.privacyOptions}>
              <Text style={styles.privacyHeading}>공개 범위</Text>
              <TouchableHighlight
                style={styles.privacyOptionItem}
                underlayColor={colors.lightGrey03}
                onPress={() => this.selectPrivacyOption("public")}
              >
                <View>
                  <Text style={styles.privacyOptionTitle}>전체 공개</Text>
                  <Text style={styles.privacyOptionDescription}>
                    만드신 관심 가게 리스트가 링키 프로필에 등록되어 방문하는
                    모든 사람들에게 보여집니다
                  </Text>
                  <View style={styles.privacyRadioInput}>
                    <RadioInput
                      backgroundColor={colors.lightGrey03}
                      borderColor={colors.grey05}
                      selectedBackgroundColor={colors.green01}
                      selectedBorderColor={colors.green02}
                      iconColor={colors.white}
                      selected={privacyOption === "public"}
                    />
                  </View>
                </View>
              </TouchableHighlight>
              <View style={styles.divider}></View>
              <TouchableHighlight
                style={styles.privacyOptionItem}
                underlayColor={colors.lightGrey03}
                onPress={() => this.selectPrivacyOption("private")}
              >
                <View>
                  <Text style={styles.privacyOptionTitle}>비공개</Text>
                  <Text style={styles.privacyOptionDescription}>
                    만드신 관심 가게 리스트가 본인 및 개별적으로 프로필 공개
                    설정한 사람들에게만 보여집니다.
                  </Text>
                  <View style={styles.privacyRadioInput}>
                    <RadioInput
                      backgroundColor={colors.lightGrey03}
                      borderColor={colors.grey05}
                      selectedBackgroundColor={colors.green01}
                      selectedBorderColor={colors.green02}
                      iconColor={colors.white}
                      selected={privacyOption === "private"}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        <View style={styles.createButton}>
          <RoundedButton
            text="찜 하기"
            textColor={colors.white}
            background={colors.green01}
            borderColor="transparent"
            textAlign="left"
            iconPosition="right"
            disabled={!location}
            loading={loading}
            icon={
              <View style={styles.buttonIcon}>
                <Icon name="angle-right" color={colors.white} size={30} />
              </View>
            }
            handleOnPress={this.handleCreateList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
    shadowColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  wrapper: {
    backgroundColor: colors.white,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  closeButton: {
    position: "absolute",
    left: 20,
  },
  scrollView: {},
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.grey04,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  content: {
    paddingTop: 50,
  },
  inputWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputStyle: {
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 30,
  },
  privacyOptions: {
    marginTop: 40,
  },
  privacyHeading: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.grey04,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  privacyOptionItem: {
    flex: 1,
    padding: 20,
  },
  privacyOptionTitle: {
    fontSize: 16,
    fontWeight: "200",
    color: colors.grey04,
  },
  privacyOptionDescription: {
    fontSize: 14,
    fontWeight: "200",
    color: colors.grey04,
    marginTop: 10,
    paddingRight: 80,
  },
  privacyRadioInput: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  createButton: {
    position: "absolute",
    bottom: 0,
    right: 10,
    width: 110,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey04,
    height: 1,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonIcon: {
    position: "absolute",
    right: 0,
    top: "50%",
    marginTop: -16,
  },
});
