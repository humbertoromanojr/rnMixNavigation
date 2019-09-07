import React from 'react';

import {View, Text, Button} from 'react-native';

import styles from './styles';

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Categories page</Text>
      <Button
        title="Go to Mels"
        onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals'});
        }}
      />
    </View>
  );
};

export default CategoriesScreen;