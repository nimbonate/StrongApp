import React from 'react';
import { StyleSheet } from 'react-native';
import ExitButton from './components/ExitButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FactFinder from './screens/FactFinder';
import Dashboard from './screens/Dashboard';
import Appointments from './screens/Appointments';
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
                        headerShown: false
                    }}
                    />
                <AdminStack.Screen
                    name="Admin Dashboard"
                    component={AdminDashboard}
                    options={{ 
                        headerShown: false
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
                        headerShown: false
                    }}
                    />
                <AgentStack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ 
                        headerShown: false
                    }}
                />
                <AgentStack.Screen
                    name="New Appointment"
                    component={NewAppt}
                    options={{ 
                        headerShown: false
                    }}
                />
                <AgentStack.Screen
                    name="Business Submission Form"
                    component={BusSubForm}
                />
                <AgentStack.Screen
                    name="Appointments"
                    component={Appointments}
                />
                <AgentStack.Screen
                    name="Fact Finder"
                    component={FactFinder}
                    options={{
                        headerRight: () => (
                            <ExitButton /> 
                            )
                    }}
                />
            </AgentStack.Navigator>
)

export default function App() { 
  return (
    <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={{ animationEnabled: false }}>
            <RootStack.Screen name="agent" component={AgentStackScreen} 
                    options={{ 
                        headerShown: false
                    }}/>
            <RootStack.Screen name="admin" component={AdminStackScreen} 
                    options={{ 
                        headerShown: false
                    }}/>
        </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
