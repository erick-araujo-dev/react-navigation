import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Stack from './Stack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack/>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigation;