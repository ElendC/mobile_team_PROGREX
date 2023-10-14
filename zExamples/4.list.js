import React from 'react'
import { View, Text } from 'react-native'

const data = [
  { id: 'Chihiro', name: 'Haku' },
  { id: 'Mikasa', name: 'Eren' },
  { id: 'Kairi', name: 'Sora' },
]

export default function App() {
  return (
    <View>
      {data.map((item) => (
        <Text>{item.name} the id is {item.id}</Text>
      ))}
    </View>
  )
}