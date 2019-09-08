import React from 'react';
import {View, Text, Button} from 'react-native';

import {CATEGORIES} from '../../data/dummy-data';
import styles from './styles';

const CategoryMealsScreen = props => {
  const categId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categId);

  CategoryMealsScreen.navigationOptions = navigationData => {
    const categId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categId);

    return {
      headerTitle: selectedCategory.title,
    };
  };

  return (
    <View style={styles.container}>
      <Text>Category Meals page</Text>

      <Button
        title="The Category Meal Screen"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go Back pop"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;
