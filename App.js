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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from "./scenes/loginPage/LoginPage.jsx";
import HomePage from "./scenes/homePage/HomePage.jsx";

import { useFonts } from 'expo-font';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer from "./state/index.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//import storage from "redux-persist/lib/storage";

import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = { key: "root", storage: AsyncStorage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


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



  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Look into doing a splash screen to wait for font to load
  const [fontsLoaded] = useFonts({
    'Questrial': require('./assets/fonts/questrial/Questrial-Regular.ttf'),
  });

  const mode = "dark";
  const isAuth = Boolean(true);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  // const [user, setUser] = React.useState(null);

  // signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUser({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

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

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ title: "Login" }}
            />     

          </Stack.Navigator> */}
           <Tab.Navigator>
              <Tab.Screen name="Login" component={LoginPage}/>
            </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}

