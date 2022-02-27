import React, {useState, useEffect } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Text, View } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebase'
import { styles } from '../../components/styles'




const Login = ({ navigation }) => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [user, setuser] = useState('')

    const signIn = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            setuser(userCredential.user)     
          })
          .then(() => {
              console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
          });
    }

    useEffect(() => {
  
            if (user) {
                navigation.replace('Dashboard')
            } else { console.log('no User') }
    
    }, [user])
    
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
                    onPress={() =>signIn()}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
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
