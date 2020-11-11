import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Alert } from 'react-native';
import colors from "../utils/colors";

export default function Footer(props) {
    const {calculate} = props;
    return (
        <View>
            <TouchableOpacity  onPress={calculate} style={{marginTop: '10%'}}>
                <Text style={styles.button}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
function f() {
    Alert.alert('presed');
}
const styles = StyleSheet.create({

    button:{
        backgroundColor: colors.dark,
        color: 'white',
        width: "75%",
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: "2%",
        fontSize: 15,
        shadowRadius: 10
    }
});

