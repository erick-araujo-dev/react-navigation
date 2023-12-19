import React from 'react';
import { Text } from 'react-native';
import TextoCentral from '../components/TextoCentral';

interface Tela3Props{
    route: any
}

const Tela3:React.FC<Tela3Props> = ({route}) => {
    const r = route
    const numero = r && r.params && r.params.numero 
        ? route.params.numero : 0

    return (
        <TextoCentral bgColor='blue' txtColor='white'>
            Tela 3 - {numero}
        </TextoCentral>
    );
};

export default Tela3;