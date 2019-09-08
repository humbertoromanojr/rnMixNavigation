import React from 'react';

import {View, Text, Button} from 'react-native';

import styles from './styles';

const MealDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Detail page</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;
