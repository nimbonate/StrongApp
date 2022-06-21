import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity, 
    TouchableWithoutFeedback,
    KeyboardAvoidingView, 
    TextInput, 
    Text, 
    View,
    Keyboard } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebase'
import { styles, PlaceholderTextColor } from '../../components/styles'

import {Formik} from 'formik'
import { loginSchema } from '../../components/FormValidation'




const Login = ({ navigation }) => {
    

    const loginForm = {

        Email: '',
        Password: ''
    }

    const formRef = useRef();

    const [user, setuser] = useState('')
    const [error, setError] = useState('')

    const signIn = () => {
        signInWithEmailAndPassword(authentication, formRef.current.values.Email, formRef.current.values.Password)
        .then((userCredential) => {
            setuser(userCredential.user)     
          })
          .then(() => {
              console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log( errorMessage)
          });
    }

    useEffect(() => {
            if (user) {
                navigation.replace('Dashboard')
            } else { console.log('no User') }
    
    }, [user])
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView 
        style={styles.container}>
            <Formik
                enableReinitialize
                validationSchema={loginSchema}
                initialValues={loginForm}
                validateOnChange={false}
                innerRef={formRef}
                onSubmit={(values, actions)=>(
                    console.log('signingIn'),
                    signIn(values)
                )}
            >
            {(props)=> (
            <>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor= {PlaceholderTextColor}
                    value={props.values.Email.toLowerCase()}
                    onChangeText={props.handleChange('Email')}
                    style={styles.input}
                />
                { props.errors.Email ? <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.errorText}>{ props.errors.Email }</Text>
                    </View>
                </View>: null }
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor= {PlaceholderTextColor}
                    value={props.values.Password}
                    onChangeText={props.handleChange('Password')}
                    style={styles.input}
                    secureTextEntry
                />
                {props.errors.Password ? <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.errorText}>{ props.errors.Password }</Text>
                    </View>
                </View>: null }
                {error ? <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.errorText}>Incorrect Email or Passcode</Text>
                    </View>
                </View>: null }
            </View>
            <View style={styles.buttonContainer}>
             
                <TouchableOpacity
                    style={styles.button}
                    onPress={(
                        props.handleSubmit)}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={()=>
                        navigation.replace('admin')}>
                    <Text style={styles.buttonOutlineText}>Admin Login</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
            </Formik>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Login
