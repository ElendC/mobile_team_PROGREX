import React, {useState} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random()*6)+1 //func that returns nr between 1 and 6

export default function App() {
  //Create useState Hook | diceRolls = state var | setDiceRolls = func that updates diceRolls
  const [diceRolls, setDiceRolls] = useState([]) //useState inits the diceRoll as type array []
  // useState(0): Initializes a number state variable.
  // useState(''): Initializes a string state variable.
  // useState(false): Initializes a boolean state variable.
  // useState({}): Initializes an object state variable.

  return (
    <View style={styles.container}>
      <Button
        title="Roll dice!"
        onPress={() => {                               // () => {} Arrow function. () empty parameter | => goes to | {} executable code
          setDiceRolls([...diceRolls, randomDiceRoll()])  //Calls setDiceRolls() function, which inits the diceRolls array with value from function randomDiceRoll()
                                                        //... (spread opperator) makes the array flat. without you will get a nested array
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
      <Button
  title="Reset"
  onPress={() => {
    setDiceRolls([]);
  }}
/>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});