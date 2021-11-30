import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.titleText}>Login</Text>
            <Button
                title="Log In"
                onPress={() =>
                navigation.replace('Dashboard')
                }
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 20
    }
})
