import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const AudioList = () => {
  return (
    <View style={styles.container}>
      <Text>AudioList</Text>
    </View>
  )
}

export default AudioList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})