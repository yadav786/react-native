import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealScreen from '../screens/CategoryMealScreen'; 
import MealDetailScreen from '../screens/MealDetailScreen'; 

export default createAppContainer(createStackNavigator({
      Categories: CategoriesScreen ,
      CategoryMeals: {
          screen: CategoryMealScreen
      },
      MealDetail: MealDetailScreen
}));

