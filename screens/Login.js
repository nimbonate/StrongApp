import React, {useState, useEffect } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Text, View } from 'react-native'
import { auth } from '../firebase'


const Login = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    //set initializing state while firebase starts
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    //handle user state change
    function onAuthStateChange(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    
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
                    navigation.replace('Dashboard')
                    }
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() =>
                    navigation.replace('admin')
                    }
                >
                    <Text style={styles.buttonOutlineText}>Admin Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

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
