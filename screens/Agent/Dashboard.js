import React, { useState } from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native'
import { signOut } from "firebase/auth";
import { authentication } from '../../firebase';
import { styles, PlaceholderTextColor } from '../../components/styles';

const Dashboard = ({ navigation }) => {
   

    return (
        <View style={styles.container}>
            <View style={styles.arch}>
                
            </View>
            <View style={styles.neumorphismSection}>
                <View style={styles.sectionHighlight}>
                    <Text style={styles.reviewText}>Welcome Back:</Text>
                    <Text style={styles.reviewText}>{authentication.currentUser.email}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
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
                /*onPress={() =>
                    navigation.navigate('AppointmentStack')
                    }*/
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
            <View style={{height:50}}/>
           {/*<View style={styles.fullWidthCenter}>
                <TouchableOpacity
                >
                    <Image
                        style={{width: 120, height: 120 }}
                        source={require('../../assets/AllieButton.png')}
                    />
                </TouchableOpacity>
            </View>*/}
        </View>
    )
}

export default Dashboard


