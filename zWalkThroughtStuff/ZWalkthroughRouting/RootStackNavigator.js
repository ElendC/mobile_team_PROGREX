import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Screen1 } from '../screens/page1'
import {Index} from '../screens/index'


const Root = createStackNavigator()

const RootStackNavigator = () => {
    return (
      <NavigationContainer>
        <Root.Navigator initialRouteName='Index'>
          <Root.Screen name="ProgRex" component={Index} />
          <Root.Screen name="Second Page" component={Screen1} />

        </Root.Navigator>
      </NavigationContainer>
    )
  }

  export default RootStackNavigator;
//Have this in navigation folder