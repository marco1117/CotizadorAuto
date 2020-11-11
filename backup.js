import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import StudentsList from "./components/students";

export default function App() {
    return (
        <LinearGradient colors={['#343c44', '#58684c']} style={styles.background}>
            <View>
                <Image
                    source={require('./assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Entrena y Compite por ser el mejor.</Text>

                <TouchableOpacity onPress={pressed}>
                    <Text style={styles.login}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressed}>
                    <Text style={styles.signUp}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

function pressed() {
    Alert.alert('Presed')
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%'
    },
    text: {
        color: 'black',
        marginTop: '-10%',
        marginLeft: '20%',
        marginBottom: '40%'
    },
    signUp: {
        backgroundColor: '#343c44',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize: 24,
        marginTop: '10%'
    },
    login: {
        backgroundColor: '#a48c64',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '11%',
        padding: "2%",
        fontSize: 24,
    }
});
