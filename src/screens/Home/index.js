import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    

    return (
      <View style={styles.tela}>
        <ImageBackground 
        style={ styles.imgBackground }
        resizeMode='cover' 
        source={require("../../../assets/background.png")}>

        <Text style={styles.titulo}>Correção de Provas</Text>

        {/*Os cálculos para os livros 1 e 2 são os mesmos 
           O mesmo acontece para os livros 3, 4 e 5 
           Porém é mais interessante mostrar cada livro separado para o úsuario selecionar */}

        {/*BOOK 1*/}
        <TouchableOpacity style={styles.bookButton}
          onPress={() => navigation.navigate('Books 1 & 2')}>
              <Text style={styles.bookButtonText}>Book 1</Text>
        </TouchableOpacity>

        {/*BOOK 2*/}
        <TouchableOpacity style={[styles.bookButton, styles.bookButton2]} 
          onPress={() => navigation.navigate('Books 1 & 2')}>
              <Text style={styles.bookButtonText}>Book 2</Text>
        </TouchableOpacity>

        {/*BOOK 3*/}
        <TouchableOpacity style={[styles.bookButton, styles.bookButton3]}
          onPress={() => navigation.navigate('Books 3, 4 & 5')}>
              <Text style={styles.bookButtonText}>Book 3</Text>
        </TouchableOpacity>

        {/*BOOK 4*/}
        <TouchableOpacity style={[styles.bookButton, styles.bookButton4]}
          onPress={() => navigation.navigate('Books 3, 4 & 5')}>
              <Text style={styles.bookButtonText}>Book 4</Text>
        </TouchableOpacity>

        {/*BOOK 5*/}
        <TouchableOpacity style={[styles.bookButton, styles.bookButton5]}
          onPress={() => navigation.navigate('Books 3, 4 & 5')}>
              <Text style={styles.bookButtonText}>Book 5</Text>
        </TouchableOpacity>
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

    titulo: {
      fontSize: 36,
      color: "#F3F3F3",
      fontWeight: "bold",
      marginBottom: 30      
    },

    bookButton: {
      height: 72,
      width: 240,
      backgroundColor: "#c3d657",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 24,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 15,
        height: 15
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 10    /*Elevation para aparecer a sombra no Android */
    },
    bookButton2: {
      backgroundColor: "#2bb4c9"
    },
    bookButton3: {
      backgroundColor: "#a33aa0"
    },
    bookButton4: {
      backgroundColor: "#f7673f"
    },
    bookButton5: {
      backgroundColor: "#bb3742"
    },
    bookButtonText: {
      fontSize: 24,
      color: "#FFF",
      fontWeight: "bold"
    }
  })