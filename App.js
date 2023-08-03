import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles.js';
import { Platform, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import React from 'react';

//jj
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

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        setErrorMsg("permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion( setLocation(prevLoc => ({
          ...prevLoc,
          latitude: location.latitude,
          longitude: location.longitude,
        })));
    })();
  }, []);

  let text = "waiting...";
  
  if(errorMsg){
    text = errorMsg;
  } else if(location){
    text = JSON.stringify(location);
    
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.mapContainer}
        region={region}
      // onRegionChange={setRegion}
      >
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
}

