import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Home from './screens/home';
import AddIngredientScreen from './screens/add-ingredient';
import MainDrawerContentView from './components/main-drawer-content/MainDrawerContentView';

export const routes = {
    homeScreen: 'Home',
    addIngredientScreen: 'AddIngredient',
};

const router = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            header: null
        })
    },
    AddIngredient: {
        screen: AddIngredientScreen,
        navigationOptions: () => ({
            header: null
        })
    },
  }
);

const AppNavigator = createDrawerNavigator({
    Home: { 
        screen: router,
        navigationOptions: () => ({
            header: null
        })
    },
  }, {
    contentComponent: (props) => (
      <MainDrawerContentView navigation={props.navigation} />
    )
  });

export default AppNavigator;