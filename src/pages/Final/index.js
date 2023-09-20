import { StatusBar } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Animation } from "react-native-animatable";

export default function Iniciar(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}> 
           <View style={styles.containerHeader}>
                <Text  style={styles.texto}>PARABÉNS
                VOCÊ
                CONSEGUIU!</Text>
                <View style={styles.containerImage}>
                <Image style={styles.IndoALI} source={require('../../assets/indoALI2.jpeg')}/> 
            </View> 
            <TouchableOpacity onPress={()=>navigation.navigate("Iniciar")} style={styles.corFundo}>
                    <Text style={styles.botao}>
                        REINICIAR
                    </Text>
                </TouchableOpacity>  
           </View>
            <View style={styles.containerForm}>
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
        height: "75%",
        justifyContent: "center"
    },
    containerForm:{
        height: "25%"

    },
    texto:{
        fontSize: 60,
        textAlign: "center", 
        fontWeight: "bold"
    },
    botao:{
        fontSize: 30,
        textAlign: "center"
    },
    corFundo:{
        backgroundColor: "#FFF",
        borderRadius: 50,
        width: "40%",
        alignSelf: "center",
        marginTop: "auto",
    }
}) 