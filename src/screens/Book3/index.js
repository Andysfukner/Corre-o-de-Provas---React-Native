import React, { useRef } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, Keyboard, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Book1() {
    const readingRef = useRef();
    const compositionRef = useRef();

    const [listening, setListening] = useState(0)
    const [reading, setReading] = useState(0)
    const [composition, setComposition] = useState(0)
    const [prova, setProva] = useState(0)
    const [total, setTotal] = useState(0);

    /*Calcula o Valor da Prova junto com a Redação */
    const calculateValuesTotal = (listening, reading, composition) => {
      return (8 - ((listening*0.1) + (reading*0.12))) + composition;
    }

    /*Calcula o Valor da Prova somente */
    const calculateValues = (listening, reading) => {
      return (8 - ((listening*0.1) + (reading*0.12)));
    }
  
    const navigation = useNavigation();
    return (
      <View style={[styles.tela]}>
        <ImageBackground 
        style={ styles.imgBackground }
        resizeMode='cover' 
        source={require("../../../assets/background.png")}>

        <Text style={[styles.texto]}>Erros Listening: </Text>
        <TextInput style={[styles.textoInput]}
          placeholder="Listening"
          onChangeText={(valueListening) => valueListening.length ? setListening(parseInt(valueListening)): setListening(0)}
          returnKeyType="next"
          onSubmitEditing={()=> {readingRef.current.focus()}}
          keyboardType="numeric"
          blurOnSubmit={false}
        />
        <Text style={[styles.texto]}>Erros Reading: </Text>
        <TextInput style={[styles.textoInput]}
          placeholder="Reading" 
          onChangeText={(valueReading) => valueReading.length ? setReading(parseInt(valueReading)): setReading(0)}
          returnKeyType="next"
          onSubmitEditing={()=> {compositionRef.current.focus()}}
          ref={readingRef}
          keyboardType="numeric"
          blurOnSubmit={false}
        />

        <Text style={[styles.texto]}>Nota da Composition</Text>
        <TextInput style={[styles.textoInput, {marginBottom: 50}]}
          placeholder="Composition"
          onChangeText={(valueComposition) => valueComposition.length ? setComposition(parseFloat(valueComposition)): setComposition(0)}
          ref={compositionRef}
          keyboardType="numeric"
          onSubmitEditing={()=> {setProva(calculateValues(listening,reading));
          setTotal(calculateValuesTotal(listening,reading,composition))}}
        />

        
        <Button
          title={'Calcular'}
          onPress={() => {setProva(calculateValues(listening, reading, composition));
          setTotal(calculateValuesTotal(listening,reading,composition))
          Keyboard.dismiss()}}
        /> 
        <Text style={[styles.texto, {marginTop: 30}]}> Nota da Prova: {parseFloat(prova).toFixed(2)}
        </Text>
        <Text style={[styles.texto, {marginVertical: 20}]}> Prova + Composition: {parseFloat(total).toFixed(2)}</Text>
        {/*<Button 
          title="Return"
          onPress={() => navigation.navigate('Home')}
        />*/}
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    imgBackground: {
      height: "100%",
      width: "100%",
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: "#3537a7"
    },

    tela: {
      flex: 1
    },

    texto: {
      fontSize: 26,
      color: "#F2F2F2",
      fontWeight: "bold"
    },

    textoInput: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingLeft:10,
      fontSize: 20,
      lineHeight: 42,
      width: 150,
      color: "#000",
      backgroundColor: "#F3F3F3",
      marginVertical: 15
      
    }
  })