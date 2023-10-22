import React, {useState, useEffect, useRef} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity  } from 'react-native';

export const Workout = ({ navigation, route }) => {

  const [seconds, setSeconds] = useState(0)  //Creates second, function to setSeconds and startvalue 0
  const [isRunning, setIsRunning] = useState(false) //Bool to use for running and stopping timer
  const intervalRef = useRef(null); //Initializes a reference, use to point to values


  useEffect(() => {
    if (isRunning) {                              //If isRunning is toggled to True
      intervalRef.current = setInterval(() => {   //setInterval = built in js func, allows to repat func with timeinterval | left side holds id
        setSeconds((prevSeconds) => prevSeconds + 1); //seconds increases by 1 every 1000ms
      }, 1000);  //
    } else {
      clearInterval(intervalRef.current);        //stops execution of the repeating func id=intervalRef.current 
    }

    return () => clearInterval(intervalRef.current); //cleanup, ensures no memory leak
  }, [isRunning]);      //Dependency array |"Run the effect every time isRunning changes"

  const handleReset = () => {  //Func resets timer
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds}s</Text>
      <TouchableOpacity  onPress={() => setIsRunning(!isRunning)} >
        <View  title={isRunning ? "Pause" : "Start"}>
          <Text>Start Timer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <View>
          <Text>
            Reset
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2D2D2D',
      alignItems: 'center',
      justifyContent: 'center',
  },
  timerText: {
      position: 'absolute',
      bottom: 80,
      fontSize: 40,
      color: 'white',
  },
})
