import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Images = {

  backgroundDay: require("../assets/images/day.png"),
  backgroundNight: require("../assets/images/night.png"),

};

const ChangeBackground = (props) => {

  let backgroundImage;

  const time = new Date().getHours();

  if (props.look === "Home") {

    backgroundImage =
      time >= 6 && time < 18 ? Images.backgroundDay : Images.backgroundNight;

  } 

  return (
    <View style={styles.container}>
        <Text style={styles.titleHome}>Weather App</Text>
        <Image source={backgroundImage} style={styles.bgImage}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },

    bgImage: {
        height: 655,
        width: 400
    },

    titleHome: {

        zIndex: 1,
        top: 56,
        color: '#000',
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#fff"
    }
  });


ChangeBackground.defaultProps = {
  look: "Home"
};

export default ChangeBackground