import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { styles, PlaceholderTextColor } from '../../components/styles'

const Appointments = ({ navigation }) => {

    //Keep past appointments for 2 weeks then delete.
    //This Part needs to display the choices for Appointments just like dashboard.
    return (
        <View style={styles.container}>          
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('New Appointment')
                    }
                >
                    <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Appointment List')
                    }
                >
                    <Text style={styles.buttonText}>Available Apointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('My Appointments')
                    }
                >
                    <Text style={styles.buttonText}>My Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.buttonOutline}
                onPress={() =>
                    navigation.replace('Dashboard')
                    }
                >
                    <Text style={styles.buttonOutlineText}>Dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Appointments
