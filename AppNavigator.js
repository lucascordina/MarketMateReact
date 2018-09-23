import { createStackNavigator } from 'react-navigation';

import Home from './screens/home';

const AppNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            header: null
        })
     },
})

AppNavigator.navigationOptions = { header: null };
console.log(AppNavigator.navigationOptions);

export default AppNavigator;