import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Sale from './pages/Sale';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                />
                <Stack.Screen
                name="Detail2"
                component={Detail2}
                />
                <Stack.Screen
                name="Detail3"
                component={Detail3}
                />
                <Stack.Screen
                name="Detail4"
                component={Detail4}
                />
                <Stack.Screen
                name="Sale"
                component={Sale}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
