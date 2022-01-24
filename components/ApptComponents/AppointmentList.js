import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const AppointmentList = ({ navigation }) => {


    //We should run the list through agency bloc and find any policies with current or vested agents. That'd be cool.

    //List of Available Appointments
    return (
        <View style={styles.container}>
            <Text>Coming Soon</Text>
        </View>
    )
}

export default AppointmentList

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})