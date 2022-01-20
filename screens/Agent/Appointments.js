import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const Appointments = ({ navigation }) => {

    //Keep past appointments for 2 weeks then delete.
    //This Part needs to display the choices for Appointments just like dashboard.
    return (
        <View style={styles.container}>          
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.replace('New Apptointment')
                    }
                >
                    <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Available Apptointments')
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
                    <Text style={styles.buttonText}>Submit Business</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Appointments

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {  
        backgroundColor: '#0782f9',
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    }
})