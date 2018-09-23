import React from 'react';
import { StyleSheet, View } from 'react-native';

import brandColors from '../assets/styling/colors';
import HeaderView from '../components/header/HeaderView';
import IngredientListViewO from '../components/ingrediento-listo/IngredientListView';

export default class Homie extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <HeaderView />
              <IngredientListViewO />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: brandColors.defaultBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 42,
    },
  });