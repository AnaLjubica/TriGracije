import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const AccommodationScreen =()=> (
<View style={styles.rowContainer}>
  <View style={styles.accomodationContainer}>
    <Image
      source={require('../assets/park.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Hotel Park</Text>
    <Text style={styles.accommodationAddress}>Hatzeov perivoj 3, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521406400</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/heritage.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Heritage Hhotel</Text>
    <Text style={styles.accommodationAddress}>Solurat 12, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521720027</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/cornaro.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Cornaro Hotel</Text>
    <Text style={styles.accommodationAddress}>Sinjska ul. 6, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521644200</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️</Text>
  </View>
  <View style={styles.accomodationContainer}>
    <Image
      source={require('../assets/amfora.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Hotel Amphora</Text>
    <Text style={styles.accommodationAddress}>Šetalište I. Pavla II 51, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521308500</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/atrium.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Hotel Atrium</Text>
    <Text style={styles.accommodationAddress}>Ul. Domovinskog rata 49, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521200000</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️⭐️</Text>
    <Image
      source={require('../assets/3.jpg')}
      style={styles.accommodationImage}
    />
    <Text style={styles.accommodationName}>Marvie Hotel</Text>
    <Text style={styles.accommodationAddress}>Perčićeva ul. 1, 21000 Split, Croatia</Text>
    <Text style={styles.accommodationNumber}>+38521279800</Text>
    <Text style={styles.accommodationReview}>⭐️⭐️⭐️⭐️⭐️</Text>
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
    justifyContent: 'space-berween',
    paddingHorizontal:10,
    marginBottom:10,
    width:'100%'  
  },
  accomodationContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 15,
    marginTop:10,
    marginHorizontal:5,
    width: '48%',  
  },
  accommodationImage: {
    width: '100%',  
    height: 130,    
    borderRadius: 10,
  },
  accommodationName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  accommodationAddress: {
    fontSize: 13,
    marginTop: 5,
  },
  accommodationNumber:{
    fontSize:10,
    marginTop:5,
  },
  accommodationReview: {
    fontSize: 10,
    marginTop: 5,
    marginBottom:5,
  },
});

export default AccommodationScreen;