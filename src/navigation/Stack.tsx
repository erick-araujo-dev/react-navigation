import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';
import Tela3 from '../views/Tela3';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator()
export default () => {
    return (
        <Stack.Navigator initialRouteName='Tela1'>
            <Stack.Screen name='Tela1' options={{title: "Home"}}>
                {props => <PassoStack {...props} avancar='Tela2'>
                    <Tela1/>
                </PassoStack>}
            </Stack.Screen>
            <Stack.Screen name='Tela2' options={{title: "Menu"}}>
                {props => <PassoStack {...props} avancar='Tela3' voltar avancarParams={{numero: 20}}>
                    <Tela2/>
                </PassoStack>}
            </Stack.Screen>
            <Stack.Screen name='Tela3' options={{title: "Menu"}}>
                {props => <PassoStack {...props} avancar='Tela3' voltar >
                    <Tela3 {...props}/>
                </PassoStack>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
