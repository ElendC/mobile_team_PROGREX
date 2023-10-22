import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Workout } from '../screens/workout'
import {Index} from '../screens/index'
import logo from '../assets/logo/test2.png'
import {Image} from 'react-native';



const Root = createStackNavigator()

const RootStackNavigator = () => {
    return (
      <NavigationContainer >
        <Root.Navigator initialRouteName='Index' screenOptions={headerOptions}>
          <Root.Screen name="ProgRex" component={Index}   />  
          <Root.Screen name="Workout" component={Workout} />
        </Root.Navigator>
      </NavigationContainer>
    )
  }

const headerOptions = {
  headerStyle: {
    backgroundColor: '#ff0000',
    elevation: 50,  // This removes the shadow on Android
    borderTopWidth: 125,
    borderTopColor: '#3e3e3e'
  },
  headerTitle: () => (
    <Image
    source ={logo}
    style={{ width: 110, height: 100, position: 'relative', bottom: -20 }} // adjust dimensions accordingly
    
    />
  ),
  headerTitleStyle:{
    fontWeight: 'bold',
    fontSize: 30
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  
}



export default RootStackNavigator;
