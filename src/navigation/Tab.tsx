import React from 'react';
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';
import Tela3 from '../views/Tela3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "purple",
                tabBarLabelStyle: { fontSize: 25, fontWeight: '500'},
                tabBarStyle: { backgroundColor: "#f0f0f0" }, 
            }}
        >
            <Tab.Screen
                name='Tela1'
                component={Tela1}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Tela2'
                component={Tela2}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                  }}
            />
            <Tab.Screen
                name='Tela3'
                component={Tela3}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                  }}
            />
        </Tab.Navigator>
    );
};
