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
    />
  )
}

export default Blank = withStyles(_Blank, theme => ({
  ImageBackground_1: {
    width: 10,
    height: 20,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,
    overflow: "scroll",
    alignSelf: "flex-start",
    fontSize: 18,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
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
  }
}))
