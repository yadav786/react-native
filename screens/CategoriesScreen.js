import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import Colors from '../constants/colors';

export default function CategoriesScreen(props) {
  
  const renderGridItem = (itemData) => {
  return <TouchableOpacity style={[styles.gridItem, {backgroundColor: itemData.item.color }]} onPress={() => { props.navigation.navigate({ routeName: 'CategoryMeals' }) }}><View><Text>{itemData.item.title}</Text></View></TouchableOpacity>
  }

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES}  renderItem={renderGridItem} numColumns={2} />
  );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
