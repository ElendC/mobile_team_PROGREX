import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, Image  } from 'react-native';
import pushup from '../assets/index/pushup2.png'

export const Homepage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
        <View style={styles.box}> 
          {/* TOP-LEFT BOX */}
            <Image
            source ={pushup}
            style={{ width: 100, height: 100, position: 'relative', left: '30%', top: '5%', transform: [{ scaleX: -1}] }} // adjust dimensions accordingly
            />
          <Text style={styles.boxTextTitle} >Start Workout</Text>
          <Text style={styles.boxTextDescription} >Start your session here</Text>

          
        {/* TOP-LEFT BOX */}
        </View>
        </TouchableOpacity>

        <View style={styles.box}>
          {/* TOP-RIGHT BOX */}
            <Text>Progress</Text>
          {/* TOP-RIGHT BOX */}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          {/* Bottom-LEFT BOX */}

            <Text>Diet</Text>

          
          {/* Bottom-LEFT BOX */}
        </View>
        <View style={styles.box}>
          {/* Bottom-RIGHT BOX */}
            <Text>About</Text>
          {/* Bottom-RIGHT BOX */}
        </View>
      </View>
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

box: {
    width: '90%',  // Increase the width since they are stacked vertically
    aspectRatio: 3,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
boxTextTitle: {
  position: 'absolute',
  left: '5%',
  bottom: '55%',
  color: 'white',
  fontWeight: '900',
  fontSize: 22
},
boxTextDescription: {
  position: 'absolute',
  left: '8%',
  bottom: '25%',
  color: 'white',
  fontWeight: '100',
}

});


