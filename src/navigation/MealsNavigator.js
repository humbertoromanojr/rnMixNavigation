import {Platform} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meals Categories',
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : '#fff',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
    },
  },
);

export default createAppContainer(MealsNavigator);
