import { StatusBar } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function Iniciar(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}> 
           <View style={styles.containerHeader}>
                <Text style={styles.texto}>CERTO</Text>
           </View>
            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.corFundo}>
                    <Text style={styles.botao}>
                        Próximo
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#04F501",
    },
    indoALI:{
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
        fontSize: 100,
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
        alignSelf: "center"
    }
}) 