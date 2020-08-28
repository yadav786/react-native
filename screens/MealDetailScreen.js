import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function MealDetailScreen(props) {
  return (
    <View style={styles.screen}><Text>The MealDetailScreen!</Text>
    <Button title="Go Back To Top" onPress={() => { props.navigation.popToTop() }} />
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
