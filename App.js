import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View, Alert, Button, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import colors from "./app/src/utils/colors";
import Form from './app/src/components/form'
import Result from './app/src/components/result';
import Footer from './app/src/components/footer';
import logo from './assets/images/logo.png'; 

import { obtenerDiferenciaAno, calcularMarca, obtenerPlan } from "./helper";

export default function App() {
   
    const [marca, setMarca] = useState(null);
    const [ano, setAno] = useState(null);
    const [plan, setPlan] = useState(null);
    const [result, setResult] = useState({
        planmarca: null,
        totalmarca: null,
        plans: null,
        marca: null,
        ano: null
    });
    const calculate = () => {
        console.log('Marca: ', marca);
        console.log('ano: ', ano);
        console.log('plan: ', plan);
        if (!marca ||  !ano || !plan)
            console.log('No puedes realizar la operacion ');
        else{
            let resultado = 0;
            const diferencia = obtenerDiferenciaAno(ano);
         //   const { marca, ano, plan } = datos;
           const planmarca = marca / ((diferencia * 3 * resultado) /100);
           //const planmarca = 0;
            
            const totalmarca = parseInt(plan) + parseInt(marca) + parseInt(ano) ;
            //const totalmarca = planmarca + plan;
            setResult({
               
                planmarca: planmarca,
                totalmarca: totalmarca,
                
                plans: plan,
                marca: marca,
                ano: ano
            });
        }
    };
    return (
        <Fragment>
             <Image source={logo} style={{ width: 150, height: 50 }} /> 
            <LinearGradient colors={[colors.primary, colors.secondary ]} style={styles.background}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>COTIZADOR VENTA DE AUTO</Text>
                </View>
                <Form setMarca={setMarca} setAno={setAno} setPlan={setPlan}></Form>
                <Result setResult={result}></Result>
                <Footer calculate={calculate}></Footer>
               
            </LinearGradient>
        
        </Fragment>
        
    );
}

function pressed() {
    Alert.alert('Presed')
}

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%'
    },
    title: {
        backgroundColor: colors.dark,
        alignItems: 'center',
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowRadius: 5
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 25
    }
});
