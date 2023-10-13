import React, {useState} from 'react'
import { Button, View } from 'react-native'


function MyComponent({title}) {
  return (
    <View>
      <Button title={title} color="#1ACDA5" />
    </View>
  )
}

function CounterButton ({title, onIncrement}){
  return <Button title={title} onPress={onIncrement}/>
}

function ResetCounter ({title, reset}){
  return <Button title={title} onPress={reset}/>
}

export default function App() {
  const [count, setCount] = useState(0)

  return(
    <View>
    <MyComponent title="test1" />
    <MyComponent title="test2" />

    <Button
      title="Press me"
      onPress={() => {
        console.log('Pressed!')
      }}
    />

    <CounterButton title={`Click here to increment: ${count}`}
    onIncrement={() => setCount (count +1)} />

    <ResetCounter title={'RESET COUNTER'}
    reset={() => setCount (0)}/>
    </View>
    
  )
}