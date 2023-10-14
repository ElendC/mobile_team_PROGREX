import React, {useState} from 'react'
import { Button, View, Text } from 'react-native'

const Card = ({title, showButton}) =>(
  <View>
    <Text style={{fontSize: 60}}>{title}</Text>
    {showButton && <Button title="press me!"/>}
  </View>
)

export default function App() {
  const [count, setCount] = useState(0)

  return(
    <Card title='Hello' showButton={true}></Card>
    
  )
}