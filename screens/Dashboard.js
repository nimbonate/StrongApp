import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Dashboard = ({ navigation }) => {
    return (
        <View>
            <Button
            style={styles.buttonStyle}
            title='Start a new Fact Finder'
            onPress={() =>
                navigation.replace('Fact Finder')
                }
            />
            <Button
            style={styles.buttonStyle}
            title='Log Out'
            onPress={() =>
                navigation.replace('Login')
                }
            />
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        padding: 5
    },
})
