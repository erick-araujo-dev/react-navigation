import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Stack from './Stack';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './Tab';
import Drawer from './Drawer';

const Navigation = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Stack/> */}
                <Tab/>
                {/* <Drawer/> */}
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigation;