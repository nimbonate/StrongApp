import React, {useState} from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Text, View } from 'react-native'


const AdminLogin = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    return (
        <KeyboardAvoidingView 
        style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={text=>setemail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text=>setpassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                    navigation.replace('Admin Dashboard')
                    }
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() =>
                    navigation.replace('Login')
                    }
                >
                    <Text style={styles.buttonOutlineText}>Agent Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AdminLogin

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
