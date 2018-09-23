import React from 'react';
import { StyleSheet, View } from 'react-native';

import brandColors from '../assets/styling/colors';
import HeaderView from '../components/header/HeaderView';
import IngredientListViewO from '../components/add-ingredient/AddIngredientView';

export default class AddIngredientScreen extends React.Component {
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