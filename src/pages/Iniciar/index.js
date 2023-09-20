import { StatusBar } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import *as Animatable from "react-native-animatable"

export default function Iniciar(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}> 
           <View style={styles.containerHeader}>
                <Text style={styles.texto}>Bem Vindo!</Text>
           </View>
            <View style={styles.containerImage}>
                <Animatable.Image style={styles.IndoALI} interationCount= "infinite" animation= "bounce" source={require('../../assets/indoALI2.jpeg')}/> 
            </View>
            <View style={styles.containerForm}>
                <TouchableOpacity onPress={()=>navigation.navigate("QualNome")} style={styles.corFundo}>
                    <Text style={styles.botao}>
                        Iniciar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#B0E0E6",
    },
    IndoALI:{
        alignSelf: "center",
        borderRadius: 50
    },
    containerHeader:{
        height: "33%",
    },
    containerImage:{
        height: "33%"
    },
    containerForm:{
        height: "33%"
    },
    texto:{
        fontSize: 50,
        textAlign: "center", 
    },
    botao:{
        fontSize: 30,
        textAlign: "center"
    },
    corFundo:{
        backgroundColor: "#FFF",
        borderRadius: 50,
        width: "40%",
        alignSelf: "center"
    }
}) 
