import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './AddIngredientHeaderViewStyle';
import { routes } from '../../AppNavigator';
import brandColors from '../../assets/styling/colors';

export default class AddIngredientHeaderView extends Component {
  constructor() {
    super();
    this.state = {
      currentListName: 'Add Ingredient',
      searchValue: '',
    };
  }

  render() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>{this.state.currentListName}</Text>
        <TouchableOpacity style={style.addIngredientIcon} onPress={() => {
                    this.props.navigation.navigate(routes.homeScreen)
                }} >
            <Icon name="ios-arrow-back" color={brandColors.iconColor} size={40} />
        </TouchableOpacity>
      </View>
    );
  }
}
