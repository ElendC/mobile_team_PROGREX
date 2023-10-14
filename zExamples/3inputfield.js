import React, {useState} from 'react'
import { Button, View, Text, TextInput } from 'react-native'



export default function App() {
  const [text,setText] = useState(' ')

  return(
    <View>
    <TextInput
        value={text}
        style={{ fontSize: 42, color:  'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text)
        }}
      />

      <Text style={{ fontSize: 24}}>
        {'\n'}You Entered: {text}
      </Text>
      </View>

  )
}