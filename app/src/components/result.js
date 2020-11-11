import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Result(props) {
    const {setResult} = props;
    console.log(setResult);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PROFORMA</Text>
            <View>
                <View style={styles.row}>
                    <Text style={styles.titles }>Marca de Auto:</Text>
                    <Text style={styles.results}>
                        {setResult.marca ? setResult.marca + ' $' : '####' }
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Modelo:</Text>
                    <Text style={styles.results}>
                        {setResult.ano ? setResult.ano +' $' : '####' }
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.titles}>Tipo:</Text>
                    <Text style={styles.results}>
                        {setResult.plans ? setResult.plans + ' $': '####' }
                    </Text>
                </View>
        
                <View style={styles.row}>
                    <Text style={styles.titles}>Total Precio:</Text>
                    <Text style={styles.results}>
                        {setResult.marca ? setResult.totalmarca + ' $': '####' }
                    </Text>
                   
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '2%'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        paddingBottom: '6%'
    },
    row: {
        padding: '2%',
        flexDirection: 'row',
    },
    titles: {
        fontWeight: 'bold',
        width: '70%',
        color: 'white'

    },
    results: {
        width: '30%',
        color: 'white'
    }


});
