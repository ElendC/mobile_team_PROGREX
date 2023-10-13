import React from 'react'
import { Button, View } from 'react-native'

function MyComponent({title}) {
  return (
    <View>
      <Button title={title} color="#1ACDA5" />
    </View>
  )
}

export default function App() {
  return(
    <View>
    <MyComponent title="test1" />
    <MyComponent title="test2" />
    <MyComponent title="test3" />
    <MyComponent title="test4" />

    </View>
  )
}