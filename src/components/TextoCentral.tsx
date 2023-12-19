import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

interface TextoCentralProps{
    children: React.ReactNode,
    bgColor?: string,
    txtColor?: string
}

const TextoCentral:React.FC<TextoCentralProps> = ({children, bgColor, txtColor}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor || "#fff" 
            }}>
            <Text style={{fontSize: 50, color: txtColor || "#000"}}>
                {children}
            </Text>
        </View>
    );
};

export default TextoCentral;