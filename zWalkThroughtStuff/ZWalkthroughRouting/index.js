import React from 'react';
import { Text, View, TouchableOpacity, Button  } from 'react-native';

export const Index = ({ navigation, route }) => {
  return (
    <View>
 <TouchableOpacity onPress={() => navigation.navigate('Second Page')}>
        <Text>This is the main page</Text>
        </TouchableOpacity>
        
        <Button
        title="Go to Screen2"
        onPress={() => {
          navigation.push('Second Page', { paramA: 'Hello!' })
        }}
      />

    </View>

  )
  
};
