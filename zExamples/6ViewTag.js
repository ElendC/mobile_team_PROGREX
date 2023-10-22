import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.box} />
      <Text>hello</Text>
      <View style={styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                   //Allws components to expand
    justifyContent: 'center', //Child position along main axis
    alignItems: 'center',     //Child position akibg cross axis
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
  },
})