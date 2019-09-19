import React from 'react';
import { 
    createStackNavigator, 
    createAppContainer ,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";

// SCREENS

import SignIn from './components/auth';
import Games from './components/games';
import News from './components/games';

const AppStack = createBottomTabNavigator({
    News : News,
    Games : Games
});

const AuthStack = createStackNavigator({
    SignIn:SignIn
},{
    headerMode:'none'
})

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack
    },{
        initialRouteName:"Auth"
    }))
}