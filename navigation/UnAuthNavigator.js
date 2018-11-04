import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const UnAuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
});


export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: UnAuthStack,
});