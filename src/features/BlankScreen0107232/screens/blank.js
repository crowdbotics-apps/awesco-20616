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
  }
}))
