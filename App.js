import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles.js';
import { View, Text } from 'react-native';
import  MapView  from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useState } from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps';

//j
export default function App() {

 

    const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

  const onRegionChange = (region) => {
    this.setState({ region });
  }

  return (
    <View style={styles.container}>
      
      <MapView
        provider= { PROVIDER_GOOGLE }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapContainer}
        region={ region }
        // onRegionChange={setRegion}
      >
        <Marker coordinate={region}/>
      </MapView>
    </View>
  );
}

