import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';

import reducer from './reducer';
import AppNavigator from './AppNavigator';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const styles = StyleSheet.create({
  stackView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigator style={styles.stackView} />
          </PersistGate>
      </Provider>
    );
  }
}
