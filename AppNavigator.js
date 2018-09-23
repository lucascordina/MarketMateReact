import { createStackNavigator } from 'react-navigation';

import Home from './screens/home';
import Homie from './screens/ingrediento';

export const routes = {
    homeScreen: 'Home',
    addIngredientScreen: 'AddIngredient',
};

const AppNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            header: null
        })
     },
     AddIngredient: {
         screen: Homie,
         navigationOptions: () => ({
             header: null
         })
     },
})

export default AppNavigator;