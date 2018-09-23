import { createStackNavigator } from 'react-navigation';

import Home from './screens/home';
import Homie from './screens/ingrediento';

const AppNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            header: null
        })
     },
     SecondScreenTest: {
         screen: Homie,
         navigationOptions: () => ({
             header: null
         })
     },
})

export default AppNavigator;