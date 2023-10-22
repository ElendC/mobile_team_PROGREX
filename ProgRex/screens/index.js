import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, TextInput  } from 'react-native';

export const Index = ({ navigation, route }) =>{

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };
  
  const handleRegister = () => {
    // Handle register here
  }


  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.registerBox}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Register" onPress={handleRegister} />
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
loginBox: {
  width: '80%',
  padding: 20,
  backgroundColor: '#D3D3D3',  // Soft, off-white color
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,  // This adds shadow on Android; higher values increase the shadow size
},
registerBox: {
  width: '80%',
  marginTop: 20,
  padding: 20,
  backgroundColor: '#D3D3D3',  // Soft, off-white color
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,  // This adds shadow on Android; higher values increase the shadow size
},
input: {
  marginVertical: 10,         // Spacing between inputs
  padding: 10,                // Padding inside input
  borderBottomColor: '#ccc',  // A subtle bottom border
  borderBottomWidth: 1,
}

});


