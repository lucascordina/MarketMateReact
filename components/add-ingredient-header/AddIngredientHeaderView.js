import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './AddIngredientHeaderViewStyle';
import { routes } from '../../AppNavigator';
import brandColors from '../../assets/styling/colors';

export default class AddIngredientHeaderView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>Add Ingredient</Text>
        <TouchableOpacity
          style={style.addIngredientIcon}
          onPress={() => {
              this.props.navigation.navigate(routes.homeScreen)
          }}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
            <Icon name="ios-arrow-back" color={brandColors.iconColor} size={32} />
        </TouchableOpacity>
      </View>
    );
  }
}
