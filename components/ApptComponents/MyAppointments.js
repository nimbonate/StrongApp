import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const MyAppointments = ({ navigation }) => {

    //Keep Past Appointments for 2 weeks
    return (
        <View style={styles.container}>
            <Text>Coming Soon</Text>
        </View>
    )
}

export default MyAppointments

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})