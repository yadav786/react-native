import React, {useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from  './constants/colors';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  
 const [goals, setGoals] = useState('');
  return (
    <View style={styles.screen}>
    <Header title="Guess a Number" />
    <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
