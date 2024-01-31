import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

const OtherScreen = () => (
  <View style={styles.rowContainer}>
  <View style={styles.otherContainer}>
    <Image
      source={require('../assets/ina.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>INA Gas Station</Text>
    <Text style={styles.otherAddress}>Pojišanska ul.27, 21000 Split, Croatia</Text>
    
    <Image
      source={require('../assets/atm.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>Shopping&ATMs</Text>
    <Text style={styles.otherAddress}>Vukovarska 207, 21000 Split, Croatia</Text>
    <Image
      source={require('../assets/mall.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>Shopping&ATMs</Text>
    <Text style={styles.otherAddress}>Ul. Josipa Jovića 93, 21000 Split, Croatia</Text>
    </View>
    <View style={styles.otherContainer}>
    
    <Image
      source={require('../assets/plaže.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>Kupališta</Text>
    <Text style={styles.otherAddress}>Žnjan, Bene, Bačvice, 21000 Split, Croatia</Text>
    <Image
      source={require('../assets/avio.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>Splitski Aerodrom</Text>
    <Text style={styles.otherAddress}>Cesta Dr.Franje Tuđmana 1270, Kaštel Štafilić, Croatia</Text>
    <Image
      source={require('../assets/tifon.jpg')}
      style={styles.otherImage}
    />
    <Text style={styles.otherName}>Tifon Gas Station</Text>
    <Text style={styles.otherAddress}>Ul. Zbora Narodne garde 8, 21000 Split, Croatia</Text>
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
  otherContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 15,
    marginTop:10,
    marginHorizontal:5,
    width: '48%',  
  },
  otherImage: {
    width: '100%',  
    height: 130,    
    borderRadius: 10,
  },
  otherName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  otherAddress: {
    fontSize: 13,
    marginTop: 5,
    marginBottom:5,
  },
});
export default OtherScreen;