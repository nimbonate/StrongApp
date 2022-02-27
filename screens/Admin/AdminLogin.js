import React, {useState} from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Text, View } from 'react-native'

import { adminStyles } from '../../components/styles'

const AdminLogin = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const adminCheck = () => {
        if (email.toLowerCase() == 'admin@stronglyfe.com' && password == 'admin') {
            navigation.replace('Admin Dashboard')
        } else { null }
    };

    return (
        <KeyboardAvoidingView 
        style={adminStyles.container}>
            <View style={adminStyles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={text=>setemail(text)}
                    style={adminStyles.input}
                />
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text=>setpassword(text)}
                    style={adminStyles.input}
                    secureTextEntry
                />
            </View>
            <View style={adminStyles.buttonContainer}>
                <TouchableOpacity
                    style={adminStyles.button}
                    onPress={() => //adminCheck()}
                    navigation.replace('Admin Dashboard')} //Switch back for actual usage
                >
                    <Text style={adminStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[adminStyles.button, adminStyles.buttonOutline]}
                    onPress={() =>
                    navigation.replace('agent')
                    }
                >
                    <Text style={adminStyles.buttonOutlineText}>Agent Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AdminLogin
