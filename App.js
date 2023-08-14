import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles.js';
import { Platform, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import { useMemo } from "react";
import { NavigationContainer } from '@react-navigation/native';

import LoginPage from "./scenes/loginPage/LoginPage.jsx";
import HomePage from "./scenes/homePage/HomePage.jsx";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  // const [region, setRegion] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });

  // const onRegionChange = (region) => {
  //   this.setState({ region });
  // }

  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if(status !== 'granted'){
  //       setErrorMsg("permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setRegion( setLocation(prevLoc => ({
  //         ...prevLoc,
  //         latitude: location.latitude,
  //         longitude: location.longitude,
  //       })));
  //   })();
  // }, []);

  // let text = "waiting...";
  
  // if(errorMsg){
  //   text = errorMsg;
  // } else if(location){
  //   text = JSON.stringify(location);
    
  // }

  const mode = "dark";
  const isAuth = Boolean(true);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const Stack = createNativeStackNavigator();

  return (
    // <View style={styles.container}>
    //   <Text>{text}</Text>
    //   <MapView
    //     provider={PROVIDER_GOOGLE}
    //     initialRegion={region}
    //     style={styles.mapContainer}
    //     region={region}
    //   // onRegionChange={setRegion}
    //   >
    //     <Marker coordinate={region} />
    //   </MapView>
    // </View>
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: "Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

