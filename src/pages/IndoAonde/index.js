import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Animation } from "react-native-animatable";

export default function Escolher() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
      <Text style={styles.title}>Para onde ele esta indo?</Text>
      <View style={styles.imageContainer}>
         <Image
         source={require('../../assets/indoALI2.jpeg')}
         style={styles.IndoAli}
             />
       </View>
     <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={() => navigation.navigate('Errado')} style={styles.button}>
             <Text style={styles.buttonText}>Para casa</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Final')} style={styles.button}>
     <Text style={styles.buttonText}>Indo ali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IndoAli: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});