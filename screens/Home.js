import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ChangeBackground from '../components/ChangeBackground'


const Home = () => {

    return (
        <View style={styles.container}>
            <ChangeBackground /> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    }
  });


export default Home
