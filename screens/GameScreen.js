import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';


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

    return(<Text></Text>)
}

const styles = StyleSheet.create({

});

export default GameScreen;
