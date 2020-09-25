import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_11.jpg"
      }}
      style={this.props.themedStyle.ImageBackground_1}
    >
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_13.jpg"
        }}
        style={this.props.themedStyle.Image_3}
      />
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Text style={this.props.themedStyle.Text_5}>
          Welcome to my World of Fashion
        </Text>
      </TouchableOpacity>
      <Text style={this.props.themedStyle.Text_11}>Sample text content</Text>
    </ImageBackground>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  ImageBackground_1: {
    overflow: "scroll",
    alignSelf: "center",
    fontSize: 18,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "stretch"
  },
  Image_3: {
    width: 261,
    height: 200,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 12,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    overflow: "scroll",
    alignSelf: "center",
    borderColor: "#000000",
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  Text_5: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 12,
    color: "#a511e4",
    backgroundColor: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    borderColor: "#f8240d",
    borderStyle: "dotted",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 10,
    letterSpacing: 1
  },
  Text_11: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
}))
