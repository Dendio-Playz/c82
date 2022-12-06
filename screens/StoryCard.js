import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Ionicon from "react-native-vector-icons/Ionicons"
import {RFValue} from "react-native-responsive-fontsize"

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style = {styles.cardContainer}>
            <Image 
            source = {require("../assets/story_image_1.png")}
            style = {styles.storyImage}
            >

            </Image>
            <View style = {styles.titleContainer}>
              <Text style = {styles.storyTitleText}>
                {this.props.story.title}
              </Text>
              <Text style = {styles.storyAuthorText}>
                {this.props.story.author}
              </Text>
              <Text style = {styles.storyDescriptionText}>
                {this.props.story.description}
              </Text>
            </View>
            <View style = {styles.actionContainer}>
              <View style = {styles.likeButton}>
                <Ionicon name = {"heart"} size = {RFValue(30)} color = {"white"}>
                <Text style={styles.likeText}>12k!</Text>
                </Ionicon>
              </View>
            </View>
          </View>
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
