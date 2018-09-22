import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';

import reducer from './reducer';

import HeaderView from './components/header/HeaderView';
import IngredientListView from './components/ingredient-list/IngredientListView';
import brandColors from './assets/styling/colors';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

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
        <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
              <HeaderView />
              <IngredientListView />
            </View>
          </PersistGate>
      </Provider>
    );
  }
}
