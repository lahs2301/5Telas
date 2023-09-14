import { StatusBar } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function Iniciar(){
    return(
        <View style={styles.container}> 
           <View style={styles.containerHeader}>
                <Text style={styles.texto}>Bem Vindo</Text>
           </View>
            <View style={styles.containerImage}>
                <Image style={styles.indoALI} source={require('../../assets/indoALI2.jpeg')}/> 
            </View>
            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.corFundo}>
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
        backgroundColor: "#EBD01B",
    },
    indoALI:{
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
