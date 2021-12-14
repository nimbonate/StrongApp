import React from 'react';
import { StyleSheet } from 'react-native';
import ExitButton from './components/ExitButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FactFinder from './screens/FactFinder';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import {navigationRef} from './components/RootNavigation';


const Stack = createNativeStackNavigator();

export default function App() { 

  return (
    <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                    />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Fact Finder"
                    component={FactFinder}
                    options={{
                    headerRight: () => (
                        <ExitButton /> 
                    ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
