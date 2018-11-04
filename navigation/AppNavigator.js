import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const UnAuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});


export default createSwitchNavigator({
  Unauth: UnAuthStack,
  Auth: MainTabNavigator,
});