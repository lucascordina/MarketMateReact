import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import style from './HeaderViewStyle';

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
        <TextInput
          style={style.searchBar}
          value={this.state.searchValue}
          onChangeText={text => this.setState({ currentListName: text })}
        />
        <Button title="Add" />
      </View>
    );
  }
}
