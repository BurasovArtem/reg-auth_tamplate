import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import ProfileScreen from './screens/profileScreen.js';
import SignupScreen from './screens/Signup.js';
import SigninScreen from './screens/Signin.js';
import AuthLoadingScreen from './screens/AuthLoadingScreen.js';

const AppStack = createStackNavigator({
  Профиль: ProfileScreen,
});

AppStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index === 0;
  return {
    tabBarVisible
  };
};

const RegStack = createStackNavigator({
  Login: SignupScreen
});

const AuthStack = createStackNavigator({
  Auth: SigninScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Профиль: AppStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let imageName = require('./images/settings.png');
        if ( routeName === 'Профиль' ) {
          imageName = require('./images/profile.png');
        }
        return <Image source={imageName} style={{width: 25, resizeMode: 'contain', tintColor}} />;
      },
    })
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Reg: RegStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
