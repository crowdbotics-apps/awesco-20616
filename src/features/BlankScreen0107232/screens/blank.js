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

  state = { CheckBox_7: true }

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_11.jpg"
      }}
      style={this.props.themedStyle.ImageBackground_1}
    >
      <Button
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "center",
          fontWeight: "normal",
          fontStyle: "normal"
        }}
        style={this.props.themedStyle.Button_3}
        onPress={() => alert("Pressed!")}
      >
        Press me!
      </Button>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Button
          textStyle={{
            fontSize: 14,
            color: "#000000",
            textAlign: "center",
            fontWeight: "normal",
            fontStyle: "normal"
          }}
          style={this.props.themedStyle.Button_5}
          onPress={() => alert("Pressed!")}
        >
          First Name
        </Button>
      </TouchableOpacity>
      <CheckBox
        text="Checkbox"
        disabled={false}
        style={this.props.themedStyle.CheckBox_7}
        checked={this.state.CheckBox_7}
        onChange={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
    </ImageBackground>
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
  },
  Button_3: {
    marginLeft: 11,
    marginRight: 0,
    marginTop: 7,
    marginBottom: 5,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 7,
    paddingBottom: 7,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#3366FF",
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
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Button_5: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 11,
    marginBottom: 5,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 7,
    paddingBottom: 7,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 14,
    color: "#000000",
    backgroundColor: "#8f33ff",
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
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  CheckBox_7: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
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
