import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CategoryMealScreen(props) {
  return (
    <View style={styles.screen}><Text>The CategoryMealScreen!</Text>
        <Button title="Click" onPress={() => { props.navigation.navigate({routeName : 'MealDetail'})}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
