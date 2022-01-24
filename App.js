import React from 'react';
import { StyleSheet } from 'react-native';
import ExitButton from './components/ExitButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FactFinder from './screens/Agent/FactFinder';
import Dashboard from './screens/Agent/Dashboard';
import Appointments from './screens/Agent/Appointments';
import NewAppt from './components/ApptComponents/NewAppt';
import Login from './screens/Agent/Login';
import AdminLogin from './screens/Admin/AdminLogin';
import AdminDashboard from './screens/Admin/AdminDashboard';
import BusSubForm from './screens/Agent/BusSubForm';
import FFList from './screens/Admin/FFList';
import {navigationRef} from './components/RootNavigation';


const RootStack = createNativeStackNavigator();

//Screens and Navigation for Admin 
const AdminStack = createNativeStackNavigator();
const AdminStackScreen = () => (
    <AdminStack.Navigator screenOptions={{ animationEnabled: false }}>
                <AdminStack.Screen
                    name="Admin Login"
                    component={AdminLogin}
                    options={{ 
                        animationEnabled: false,
                        headerShown: false
                    }}
                    />
                <AdminStack.Screen
                    name="Admin Dashboard"
                    component={AdminDashboard}
                    options={{ 
                        animationEnabled: false,
                        headerShown: false
                    }}
                    />
                <AdminStack.Screen
                    name="Fact Finder List"
                    component={FFList}
                    options={{ 
                        animationEnabled: false
                    }}
                    />
            </AdminStack.Navigator>
)

//Screens and Navigation for Agents
const AgentStack = createNativeStackNavigator();
const AgentStackScreen = () => (
    <AgentStack.Navigator screenOptions={{ animationEnabled: false }}>
                <AgentStack.Screen
                    name="Login"
                    component={Login}
                    options={{ 
                        animationEnabled: false,
                        headerShown: false
                    }}
                    />
                <AgentStack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ 
                        animationEnabled: false,
                        headerShown: false
                    }}
                    />
                <AgentStack.Screen
                    name="New Appointment"
                    component={NewAppt}
                    options = {{animationEnabled: false}}
                    />
                <AgentStack.Screen
                    name="Business Submission Form"
                    component={BusSubForm}
                    options = {{animationEnabled: false}}
                    />
                <AgentStack.Screen
                    name="Appointments"
                    component={Appointments}
                    options = {{animationEnabled: false}}
                    />
                <AgentStack.Screen
                    name="Fact Finder"
                    component={FactFinder}
                    options={{
                        animationEnabled: false,
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
                            headerShown: false,
                            animationEnabled: false,
                        }}/>
                <RootStack.Screen name="admin" component={AdminStackScreen} 
                        options={{ 
                            headerShown: false,
                            animationEnabled: false,
                        }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});
