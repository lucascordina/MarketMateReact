import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';

import HeaderView from './components/header/HeaderView';
import IngredientListView from './components/ingredient-list/IngredientListView';
import brandColors from './assets/styling/colors';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HeaderView />
          <IngredientListView />
        </View>
      </Provider>
    );
  }
}
