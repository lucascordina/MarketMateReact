import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './HeaderViewStyle';
import brandColors from '../../assets/styling/colors';

export default class HeaderView extends Component {
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
        <TouchableOpacity style={style.addIngredientIcon} onPress={() => {
                  this.props.navigation.navigate('SecondScreenTest')
              }} >
          <Icon name="ios-add" color={brandColors.iconColor} size={40} />
        </TouchableOpacity>
      </View>
    );
  }
}
