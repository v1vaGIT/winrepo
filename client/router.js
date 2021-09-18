import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from './screens/Auth'
import { TabsScreens } from './screens/TabsScreens';

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='auth' screenOptions={{headerShown: false}}>
                <Stack.Screen name='auth' component={Auth} />
                <Stack.Screen name='tabs' component={TabsScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}