import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import TextoCentral from './components/TextoCentral';
import Tela1 from './views/Tela1';
import Tela2 from './views/Tela2';
import Tela3 from './views/Tela3';
import Navigation from './navigation';


export default function App() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <Navigation/>
        </SafeAreaView>
    );
};
