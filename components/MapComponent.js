import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.5147, 
          longitude: 16.4652, 
          latitudeDelta: 0.02,
          longitudeDelta: 0.002,
        
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400, 
    width: '100%', 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;