import React, {useState } from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Colors from  './constants/colors';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  
 const [userNumber, setUserNumber] = useState('');
 const [guessRounds, setGuessRounds] = useState(0);
 const [dataLoaded, setDataLoaded] = useState(false);

 if(!dataLoaded){ 
   return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={()=> console.log('error fonts') }/>
 }

 const configureNewGameHandler = () => {
  setGuessRounds(0);
  setUserNumber('');
}

 const startGameHandler = (selectedNumber) => {
       setUserNumber(selectedNumber);
 }

 const setGuessRoundHandler = (selectedRound) => {
       setGuessRounds(selectedRound);
 }

 let content = <StartGameScreen onStartGame={startGameHandler}/>;

 if(userNumber && guessRounds <= 0 ){
     content = <GameScreen userChoice={userNumber} onGameOver={setGuessRoundHandler} />;
 }

 if(guessRounds > 0){
  content = <GameOverScreen  onRestart={configureNewGameHandler} roundsNumber={guessRounds} userNumber={userNumber} />;
 }

  return (
    <SafeAreaView  style={styles.screen}>
    <Header title="Guess a Number" />
    {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
