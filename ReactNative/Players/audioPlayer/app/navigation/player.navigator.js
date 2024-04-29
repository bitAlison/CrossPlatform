import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import AudioList from '../screens/audio.list';
import AudioPlayer from '../screens/player';
import PlayList from '../screens/play.list';

const Tab = createBottomTabNavigator();

const PlayerNavigator = () => {
  return (<Tab.Navigator>
    <Tab.Screen name='AudioList' component={AudioList} options={{
      tabBarIcon: ({color, size}) => {
        return <MaterialIcons name="headset" size={size} color={color} />
      }}
    } />
    <Tab.Screen name='Player' component={AudioPlayer} options={{
      tabBarIcon: ({color, size}) => {
        return <FontAwesome5 name="compact-disc" size={size} color={color} />
      }}
    } />
    <Tab.Screen name='PlayList' component={PlayList} options={{
      tabBarIcon: ({color, size}) => {
        return <MaterialIcons name="library-music" size={size} color={color} />
      }}
    } />
  </Tab.Navigator>
  )
}

export default PlayerNavigator;

