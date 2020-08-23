import React, {useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import Colors from  './constants/colors';

export default function GameOverScreen(props) {
  

  return (
    <View style={styles.screen}>
        <Text>Game Over!</Text>
        <View style={styles.imageContainer}>
        <Image 
         // source={require('../assets/succcess.png')} 
         source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg'}}
         style={styles.image}
         resizeMode="cover" />
        </View>
        <Text>The number of Rounds: {props.roundsNumber}</Text>
        <Text>The user number was: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    widtth: 300,
    height: 300,
    marginVertical: 30,
    overflow: 'hidden',
    borderRadius: 150,
    borderWidth: 3
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
