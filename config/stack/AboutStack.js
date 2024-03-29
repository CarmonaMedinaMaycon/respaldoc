import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../../modules/about/adapters/screens/About';

const Stack = createNativeStackNavigator();
export default function AboutStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor:'while',
        headerStyle: {backgroundColor:'#ff5a60'}
    }}>
        <Stack.Screen
        name = 'aboutStack'
        options={{title: 'Conocenos'}}
        component={About}
        />
    </Stack.Navigator>
 
  )
}