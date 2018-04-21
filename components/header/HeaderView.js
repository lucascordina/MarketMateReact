import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style from './HeaderViewStyle';

export default class HeaderView extends Component {
  render() {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>MarketMate</Text>
      </View>
    );
  }
}
