import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const AdminDashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.replace('Fact Finder List')
                    }
                >
                    <Text style={styles.buttonText}>Review Fact Finders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
                onPress={() =>
                    navigation.replace('Admin Login')
                    }
                >
                    <Text style={styles.buttonOutlineText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdminDashboard

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
        backgroundColor: '#E74212',
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#E74212',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#E74212',
        fontWeight: '700',
        fontSize: 16,
    }
})
