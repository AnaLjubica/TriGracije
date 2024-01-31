import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapComponent from '../components/MapComponent';
import { SearchBar } from 'react-native-elements';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <SearchBar 
        placeholder="Search" 
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}/>
        <View style={styles.mapContainer}>
      <MapComponent/>
    </View>
    <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Radio Dalmacija')}>
          <Text style={styles.buttonText}>Radio Dalmacija</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Radio Split')}>
          <Text style={styles.buttonText}>Radio Split</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Slobodna Dalmacija')}>
          <Text style={styles.buttonText}>Slobodna Dalmacija</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    searchBarInputContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
      },
      searchBarInput: {
        color: 'black',
      },
    mapContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop: 20,
      marginLeft:10,
      marginRight:10,
    },
    buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
   
});


