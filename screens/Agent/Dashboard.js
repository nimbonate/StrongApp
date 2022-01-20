import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { signOut } from "firebase/auth";
import { authentication } from '../../firebase';

const Dashboard = ({ navigation }) => {

    const [user, setuser] = useState('')
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text>{user}</Text>
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
                onPress={() => {
                    signOut(authentication).then(() => {
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

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
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
