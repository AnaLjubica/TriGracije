import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const EventsScreen = () => (
  <View style={styles.rowContainer}>
  <View style={styles.eventsContainer}>
    <Image
      source={require('../assets/san.jpg')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>San Sustipanske Noći</Text>
    <Text style={styles.eventsAddress}>Sustipanski put, 21000 Split, Croatia</Text>
    <Image
      source={require('../assets/ultra.jpg')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>Ultra Music Festival</Text>
    <Text style={styles.eventsAddress}>Ul. Hrv. Mornarice 10, 21000 Split, Croatia</Text>
    <Image
      source={require('../assets/dani.jpg')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>Dani Dioklecijana</Text>
    <Text style={styles.eventsAddress}>Dioklecijanova palača, 21000 Split, Croatia</Text>
 </View>
 <View style={styles.eventsContainer}>
 <Image
      source={require('../assets/festival.jpg')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>Split Film Festival</Text>
    <Text style={styles.eventsAddress}>Ilićev prolaz 1, 21000 Split, Croatia</Text>
    
    <Image
      source={require('../assets/TeatarUzMore.png')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>Teatar uz more</Text>
    <Text style={styles.eventsAddress}>Poljudsko šetalište 1, 21000 Split, Croatia</Text>
    <Image
      source={require('../assets/split.jpg')}
      style={styles.eventsImage}
    />
    <Text style={styles.eventsName}>Splitski festival</Text>
    <Text style={styles.eventsAddress}>Trg Republike, 21000 Split, Croatia</Text>
 </View>
</View> 
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:10,
    marginBottom:10,
    width:'100%'  
  },
  eventsContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 15,
    marginTop:10,
    marginHorizontal:5,
    width: '48%',  
  },
  eventsImage: {
    width: '100%',  
    height: 130,    
    borderRadius: 10,
  },
  eventsName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  eventsAddress: {
    fontSize: 13,
    marginTop: 5,
    marginBottom:5,
  },
});

export default EventsScreen;