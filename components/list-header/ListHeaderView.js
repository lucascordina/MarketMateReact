import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './ListHeaderViewStyle';
import { routes } from '../../AppNavigator';
import brandColors from '../../assets/styling/colors';

export default class ListHeaderView extends Component {
  constructor() {
    super();
    this.state = {
      currentListName: 'My List',
      searchValue: '',
    };
  }

  render() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>{this.state.currentListName}</Text>
        <TouchableOpacity style={style.menuIcon} onPress={() => {
                  this.props.navigation.navigate(routes.addIngredientScreen)
              }} >
          <Icon name="ios-menu" color={brandColors.iconColor} size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={style.addIngredientIcon} onPress={() => {
                  this.props.navigation.navigate(routes.addIngredientScreen)
              }} >
          <Icon name="ios-add" color={brandColors.iconColor} size={40} />
        </TouchableOpacity>
      </View>
    );
  }
}