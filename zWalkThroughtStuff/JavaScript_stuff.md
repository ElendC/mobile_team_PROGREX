##### **Arrow functions**
If the function takes exactly one parameter, the parentheses can be omitted: 
**x => Math.pow(x, 2).** 
Any other number of arguments will need parentheses: 
**(x, y) => Math.pow(x, y).**

## _____________________________________________________________________________________________
## State variables
import React, { useState } from 'react';

function MyComponent() {
  const [myState, setMyState] = useState(initialValue);
  
  //...
}
myState shows the state, setMyState is used to set state.
___________________________________________________
*Example that changes You Entered:*

export default function App() {
  const [text,setText] = useState(' ')

  return(
    <View>
    <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
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
## _____________________________________________________________________________________________
