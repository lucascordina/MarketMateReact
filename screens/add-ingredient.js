import React from 'react';
import { StyleSheet, View } from 'react-native';

import brandColors from '../assets/styling/colors';
import AddIngredientHeaderView from '../components/add-ingredient-header/AddIngredientHeaderView';
import AddIngredientView from '../components/add-ingredient/AddIngredientView';

export default class AddIngredientScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <AddIngredientHeaderView navigation={this.props.navigation} />
              <AddIngredientView />
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