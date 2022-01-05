import React from 'react';
import { StyleSheet } from 'react-native';
import ExitButton from './components/ExitButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FactFinder from './screens/FactFinder';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import AdminLogin from './screens/AdminLogin';
import AdminDashboard from './screens/AdminDashboard';
import BusSubForm from './screens/BusSubForm';
import {navigationRef} from './components/RootNavigation';


const RootStack = createNativeStackNavigator();

//Screens and Navigation for Admin 
const AdminStack = createNativeStackNavigator();
const AdminStackScreen = () => (
            <AdminStack.Navigator>
                <AdminStack.Screen
                    name="Admin Login"
                    component={AdminLogin}
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}
                    />
                <AdminStack.Screen
                    name="Admin Dashboard"
                    component={AdminDashboard}
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
            </AdminStack.Navigator>
)

//Screens and Navigation for Agents
const AgentStack = createNativeStackNavigator();
const AgentStackScreen = () => (
            <AgentStack.Navigator>
                <AgentStack.Screen
                    name="Login"
                    component={Login}
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}
                    />
                <AgentStack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
                <AgentStack.Screen
                    name="Business Sub Form"
                    component={BusSubForm}
                    options={{
                        headerRight: () => (
                            <ExitButton /> 
                            ),
                            animationEnabled: false
                        }}
                    />
                <AgentStack.Screen
                    name="Fact Finder"
                    component={FactFinder}
                    options={{
                        headerRight: () => (
                            <ExitButton /> 
                            ),
                            animationEnabled: false
                        }}
                />
            </AgentStack.Navigator>
)

export default function App() { 
  return (
    <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
            <RootStack.Screen name="agent" component={AgentStackScreen} 
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}/>
            <RootStack.Screen name="admin" component={AdminStackScreen} 
                    options={{ 
                        headerShown: false,
                        animationEnabled: false
                    }}/>
        </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
