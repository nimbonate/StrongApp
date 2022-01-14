import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const NewAppt = ({ navigation }) => {

    //Keep past appointments for 2 weeks then delete.
    //This Part needs to display the choices for Appointments just like dashboard.
    return (
        <View style={styles.container}>
            <Text>Coming Soon</Text>
        </View>
    )
}

export default NewAppt

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})