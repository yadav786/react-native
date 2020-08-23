import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const generatedNumber = Math.floor(Math.random() * (max - min) ) + min;
    if(generatedNumber === exclude){
        return generateRandomBetween();
    }
    else{
        generatedNumber;
    }
}

const GameScreen = (props) => {
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(()=>{
         if(currentGuess === userChoice){
             props.onGameOver(rounds);
         }
    }, [userChoice, currentGuess, onGameOver]);

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < props.userChoice) && (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie', 'You know that\'s wrong', [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }

    return(<View style={styles.screen}>
        <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
        <Button title="LOWER" color={Colors.accent} onPress={() => { nextGuessHandler('lower') }} />
        <Button title="GREATER" color={Colors.primary} onPress={() => {nextGuessHandler('greater')}} />
        </Card>
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        maxWidth: '80%',
        marginTop: 20,
        fontFamily: 'open-sans'
    }
});

export default GameScreen;
