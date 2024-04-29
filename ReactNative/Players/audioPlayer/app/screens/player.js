import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');
const AudioPlayer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.audioCount}>1 / 99</Text>
      <View style={styles.midBannerContainer}>
        <MaterialCommunityIcons name="music-circle" size={300} color="purple" />
      </View>
      <View style={styles.audioPlayerContainer}>
        <Text style={styles.audioTitle}>Audio file name</Text>
        <Slider
          style={{ width: width, height: 30 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='purple'
          maximumTrackTintColor='#000000'
        />
      </View>
    </View>
  )
}

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  audioCount: {
    textAlign: 'center',
    alignSelf: 'flex-end',
    padding: 15,
    color: 'black',
    fontSize: 14
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  audioPlayerContainer: {

  },
  audioTitle: {
    fontSize: 16,
    color: 'black',
    padding: 18
  }
})