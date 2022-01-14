import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const Appointments = ({ navigation }) => {

    //Keep past appointments for 2 weeks then delete.
    //This Part needs to display the choices for Appointments just like dashboard.
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.replace('New Appointment')
                    }
                >
                    <Text style={styles.buttonText}>New Fact Finder</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Appointments')
                    }
                >
                    <Text style={styles.buttonText}>Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Business Submission Form')
                    }
                >
                    <Text style={styles.buttonText}>Submit Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
                onPress={() =>
                    navigation.replace('Login')
                    }
                >
                    <Text style={styles.buttonOutlineText}>Log Out</Text>
                </TouchableOpacity>
            </View>
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
    }
})