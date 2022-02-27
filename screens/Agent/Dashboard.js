import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { signOut } from "firebase/auth";
import { authentication } from '../../firebase';
import { styles } from '../../components/styles';

const Dashboard = ({ navigation }) => {
   

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text>{authentication.currentUser.email}</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.replace('Fact Finder')
                    }
                >
                    <Text style={styles.buttonText}>New Fact Finder</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('AppointmentStack')
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
                onPress={() => {
                    signOut(authentication)
                    .then(() => {
                        navigation.navigate('Login')
                      }).catch((error) => {
                        console.log(error)
                      });
                    }}
                >
                    <Text style={styles.buttonOutlineText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard


