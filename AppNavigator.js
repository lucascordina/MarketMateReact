import { createStackNavigator } from 'react-navigation';

import Home from './screens/home';
import AddIngredientScreen from './screens/add-ingredient';

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
         screen: AddIngredientScreen,
         navigationOptions: () => ({
             header: null
         })
     },
})

export default AppNavigator;