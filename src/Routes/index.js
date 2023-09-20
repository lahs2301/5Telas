import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Iniciar from "../pages/Iniciar"
import Errado from "../pages/Errado"
import Certo from "../pages/Certo"
import QualNome from "../pages/QualNome"
import IndoAonde from "../pages/IndoAonde"
import Final from "../pages/Final"

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Iniciar" 
            component={Iniciar}
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name = "Errado" 
            component={Errado}
            options= { { headerShown: false} }/>
            <Stack.Screen
            name = "Certo" 
            component={Certo}
            options= { { headerShown: false} }/>
            <Stack.Screen
            name = "QualNome" 
            component={QualNome}
            options= { { headerShown: false} }/>
             <Stack.Screen
            name = "IndoAonde" 
            component={IndoAonde}
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name = "Final" 
            component={Final}
            options= { { headerShown: false} }
            />
         </Stack.Navigator>
    )
}
