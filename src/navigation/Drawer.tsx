import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';
import Tela3 from '../views/Tela3';

const Drawer = createDrawerNavigator()
export default () => {
    return (
       <Drawer.Navigator initialRouteName='Tela2'>
            <Drawer.Screen name='Tela1' component={Tela1}/>
            <Drawer.Screen name='Tela2' component={Tela2}/>
            <Drawer.Screen name='Tela3' component={Tela3}/>
       </Drawer.Navigator>
    );
};