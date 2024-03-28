import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 4500)
    }, [])
    return (
        <View style={{background: "linear-gradient(190deg, rgba(6,80,153,1) 0%, rgba(4,55,106,1) 35%, rgba(1,5,9,1) 100%)", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animatable.Text style={{ color: "white", fontSize: 36, fontWeight: 700 }} duration={4000} animation="zoomIn">Splash</Animatable.Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})