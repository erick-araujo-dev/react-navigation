import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

interface PassoStackProps{
    voltar?: boolean,
    avancar?: string,
    avancarParams?: any,
    children: React.ReactNode,
    navigation: any,
}

const PassoStack:React.FC<PassoStackProps> = ({children, avancar, voltar, avancarParams, navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                <View>
                {voltar
                    ? <Button title='Voltar' onPress={() => navigation.goBack()}/>
                    : false}
                </View>
                <View>
                    {avancar
                    ? <Button title='Avançar' onPress={() => navigation.navigate(avancar, avancarParams)}/>
                    : false}
                </View>
            </View>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>
    );
};

export default PassoStack;
