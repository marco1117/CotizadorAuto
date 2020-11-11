import React, {Fragment} from 'react';
import {StyleSheet, TextInput, View,Text } from "react-native";
import colors from '../utils/colors'
import RNPickerSelect from 'react-native-picker-select';


export default function Form(props) {
    const {setMarca, setAno, setPlan} = props;
    console.log(setPlan);
    return (
        <View style={styles.form}>
            
            {
            <View style={styles.picker}>
                 <Text>MARCA DE AUTOS</Text>
            <RNPickerSelect
                            onValueChange={(value) => setMarca(value)}
                            style={styles.input} 
                            items={[
                                { label: 'Asiatico', value: '2000' },
                                { label: 'Americano', value: '2000' },
                                { label: 'Europeo', value: '2000' },
                            ]}
            />
        </View>
        
      }
            {
                <View style={styles.picker}>
                     <Text>MODELOS DE AUTOS</Text>
                <RNPickerSelect
                                onValueChange={(value) => setAno(value)}
                                items={[
                                    { label: '2012', value: '2000' },
                                    { label: '2013', value: '3000' },
                                    { label: '2014', value: '4000' },
                                    { label: '2015', value: '5000' },
                                    { label: '2016', value: '6000' },
                                    { label: '2017', value: '8000' },
                                    { label: '2018', value: '10000' },
                                    { label: '2019', value: '12000' },
                                    { label: '2020', value: '14000' },
                                    { label: '2021', value: '16000' },
                                ]}
                />
            </View>
            }
            <View style={styles.picker}>
            <Text>TIPO DE AUTOS</Text>
                <RNPickerSelect
                                onValueChange={(value) => setPlan(value)}
                                items={[
                                    { label: 'Basico', value: '1000' },
                                    { label: 'Full', value: '5000' },
                                   
                                ]}
                                
                />
               
            </View>
        </View>
        

    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 20,
        flexDirection: 'column'
    },
    inputs: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        height: 45,
        borderBottomWidth: 1,
        width: '50%',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 2
    },
    anoInput: {
        marginLeft: '5%',
        width: '25%'
    },

    picker:{
        paddingTop: '1%',
        paddingBottom: '0%',
        width: '80%',
        alignSelf: 'center',
    }
});
