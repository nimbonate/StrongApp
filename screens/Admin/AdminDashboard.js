import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { adminStyles } from '../../components/styles'

const AdminDashboard = ({ navigation }) => {
    return (
        <View style={adminStyles.container}>
            <View style={adminStyles.buttonContainer}>
                <TouchableOpacity
                style={adminStyles.button}
                onPress={() =>
                    navigation.navigate('Fact Finder List')
                    
                }
                >
                    <Text style={adminStyles.buttonText}>Review Fact Finders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={adminStyles.button}
                /*onPress={() =>
                    navigation.navigate('Sweep List')
                    
                }*/
                >
                    <Text style={adminStyles.buttonText}>Sweep Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={adminStyles.button}
                /*onPress={() =>
                    navigation.navigate('Appointment Overview')
                    
                }*/
                >
                    <Text style={adminStyles.buttonText}>Appointment Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[adminStyles.buttonOutline]}
                onPress={() =>
                    navigation.replace('Admin Login')
                    }
                >
                    <Text style={adminStyles.buttonOutlineText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdminDashboard
