import React from 'react';
import { StyleSheet, View } from 'react-native';

import brandColors from '../assets/styling/colors';
import ListHeaderView from '../components/list-header/ListHeaderView';
import IngredientListView from '../components/ingredient-list/IngredientListView';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <ListHeaderView navigation={this.props.navigation} />
              <IngredientListView />
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