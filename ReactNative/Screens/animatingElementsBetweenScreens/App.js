import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SharedTransition, ReduceMotion, Easing, withSpring } from 'react-native-reanimated';

import Animated from 'react-native-reanimated';

const customTransition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight, {
      duration: 2000,
      easing: Easing.inOut(Easing.exp),
      reduceMotion: ReduceMotion.System,
    }),
    width: withSpring(values.targetWidth, {
      duration: 2000,
      easing: Easing.inOut(Easing.exp),
      reduceMotion: ReduceMotion.System,
    }),
    originX: withSpring(values.targetOriginX, {
      duration: 2000,
      easing: Easing.inOut(Easing.exp),
      reduceMotion: ReduceMotion.System,
    }),
    originY: withSpring(values.targetOriginY, {
      duration: 2000,
      easing: Easing.inOut(Easing.exp),
      reduceMotion: ReduceMotion.System,
    }),
  };
});

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 300, height: 300 }}
        sharedTransitionTag="tag"
        sharedTransitionStyle={customTransition}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 100, height: 100 }}
        sharedTransitionTag="tag"
        sharedTransitionStyle={customTransition}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});