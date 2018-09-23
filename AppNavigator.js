import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Home from './screens/home';
import AddIngredientScreen from './screens/add-ingredient';
import MainDrawerContentView from './components/main-drawer-content/MainDrawerContentView';

export const routes = {
    homeScreen: 'Home',
    addIngredientScreen: 'AddIngredient',
};

const AppNavigator = DrawerNavigator({
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
  }, {
    contentComponent: (props) => (
      <MainDrawerContentView navigation={props.navigation} />
    )
  });

// const AppNavigator = createStackNavigator({
//     Home: { 
//         screen: Home,
//         navigationOptions: () => ({
//             header: null
//         })
//      },
//      AddIngredient: {
//          screen: AddIngredientScreen,
//          navigationOptions: () => ({
//              header: null
//          })
//      },
// })

export default AppNavigator;