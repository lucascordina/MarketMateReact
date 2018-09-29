import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';
import { Font } from 'expo';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducer from './reducer';
import AppNavigator from './AppNavigator';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
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
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Arimo Regular': require('./assets/fonts/Arimo-Regular.ttf'),
      'Arimo Bold': require('./assets/fonts/Arimo-Bold.ttf'),
      'Arimo Italic': require('./assets/fonts/Arimo-Italic.ttf'),
      'Arimo Bold Italic': require('./assets/fonts/Arimo-BoldItalic.ttf'),
      'Pacifico Regular': require('./assets/fonts/Pacifico.ttf'),
    })

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {
            this.state.fontLoaded ? (
              <AppNavigator style={styles.stackView} />
            ) : null
          }
        </PersistGate>
      </Provider>
    );
  }
}
