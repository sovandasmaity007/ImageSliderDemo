import React from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {textColor, headercolor, appcolor, bottomTabColor, inactiveColorBottomTabText} from './constant/config'
import Splash from './Screens/Splash';
import ImageList from './Screens/ImageList';


class RootTab extends React.Component {
    render() {
        return(
            <MainStack />
        );
    }
}


//CREATE MAIN STACK...
const MainStack = createStackNavigator({

    splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      }
    }, 
    ImageList: {
      screen: ImageList,
      navigationOptions: {
        header: null,
      }
    },   
    
    
  },
    {
      // headerMode: 'none',
      initialRouteName: 'splash',
    });

   

    export default createAppContainer(MainStack); 