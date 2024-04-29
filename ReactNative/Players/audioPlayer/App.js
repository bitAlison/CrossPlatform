import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MediaProvider from "./app/context/media.context";
import PlayerNavigator from './app/navigation/player.navigator';


export default function App() {
  return (
    <MediaProvider>
      <NavigationContainer>
        <PlayerNavigator />
      </NavigationContainer>
    </MediaProvider>
  );
}

