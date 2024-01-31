import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantsScreen = () => (
  <View style={styles.rowContainer}>
  <View style={styles.restaurantContainer}>
    <Image
      source={require('../assets/bokeria.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>Bokeria</Text>
    <Text style={styles.restaurantAddress}>Domaldova 8, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38521355577</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/duje.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>Restoran Duje</Text>
    <Text style={styles.restaurantAddress}>Ul. Slobode 16a, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38521548100</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/procaffe.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>Kavana Procaffe</Text>
    <Text style={styles.restaurantAddress}>Spinutska ul. 67, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38521348323</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️</Text>
  </View>
  <View style={styles.restaurantContainer}>
    <Image
      source={require('../assets/lvxor.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>Caffe Bar Lvxor</Text>
    <Text style={styles.restaurantAddress}>Ul. Kraj SV. Ivana 11, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38521341082</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/bakra.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>Bakra</Text>
    <Text style={styles.restaurantAddress}>Ul. Majstora Radovana 2, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38521488488</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/kava.jpg')}
      style={styles.restaurantImage}
    />
    <Text style={styles.restaurantName}>D16 Kava</Text>
    <Text style={styles.restaurantAddress}>Dominisova ul. 16, 21000 Split, Croatia</Text>
    <Text style={styles.restaurantNumber}>+38591361200</Text>
    <Text style={styles.restaurantReview}>⭐️⭐️⭐️⭐️</Text>
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
  restaurantContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 15,
    marginTop:10,
    marginHorizontal:5,
    width: '48%',  
  },
  restaurantImage: {
    width: '100%',  
    height: 130,    
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  restaurantAddress: {
    fontSize: 13,
    marginTop: 5,
  },
  restaurantNumber:{
    fontSize:10,
    marginTop:5,
  },
  restaurantReview: {
    fontSize: 10,
    marginTop: 5,
    marginBottom:5,
  },
});
export default RestaurantsScreen;
