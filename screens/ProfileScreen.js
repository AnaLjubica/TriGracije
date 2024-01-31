import React, {useState} from 'react';
import { View, Text, TextInput,TouchableOpacity, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };
  const handleRegistration = () => {
    console.log('Navigate to registration screen');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        secureTextEntry
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registrationContainer}>
        <Text style={styles.registrationText}>Don't have an account?</Text>
        <TouchableOpacity style={styles.registrationButton} onPress={handleRegistration}>
          <Text style={styles.registrationButton}>Register</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    marginTop:20,
    marginBottom:10,
    marginLeft:40,
    borderRadius:8,
  },
  loginButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginLeft:40,
    marginTop:10,
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registrationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft:80,
  },
  registrationText: {
    marginRight: 5,
  },
  registrationButton: {
    color: 'grey',
    textDecorationLine: 'underline',
  },
});

export default ProfileScreen;
