import React, {useState, useRef, useEffect} from 'react'
import { TouchableOpacity, TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    TextInput, 
    Text, 
    View, 
    Keyboard } from 'react-native'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../../firebase'

import {Formik} from 'formik'
import { adminLoginSchema } from '../../components/FormValidation'

import { PlaceholderTextColor, adminStyles, styles } from '../../components/styles'

const AdminLogin = ({ navigation }) => {


    const adminLoginForm = {
         
        Email: '',
        Password: ''

    }

    const formRef = useRef();

    const [user, setuser] = useState('')
    const [error, setError] = useState('')

    const adminSignIn = () => {
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
            console.log(errorCode + errorMessage)
          });
    }
    

    useEffect(() => {
  
        if (user) {
            navigation.replace('Admin Dashboard')
        } else { 
            console.log('no user') }

}, [user])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView 
        style={adminStyles.container}>
            <Formik
                enableReinitialize
                autoFocus={true}
                validationSchema={adminLoginSchema}
                initialValues={adminLoginForm}
                validateOnChange={false}
                innerRef={formRef}
                onSubmit={(values, actions)=>(
                    console.log('admin signing in'),
                    adminSignIn(values)
                )}
            >
            {(props)=> (
            <>
            <View style={adminStyles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor= {PlaceholderTextColor}
                    value={props.values.Email}
                    onChangeText={props.handleChange('Email')}
                    style={adminStyles.input}
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
                    style={adminStyles.input}
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
            <View style={adminStyles.buttonContainer}>
                <TouchableOpacity
                    style={adminStyles.button}
                    onPress={(props.handleSubmit)}
                >
                    <Text style={adminStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={adminStyles.button}
                    onPress={() =>
                    navigation.replace('agent')
                    }
                >
                    <Text style={adminStyles.buttonOutlineText}>Agent Login</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
            </Formik>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default AdminLogin
