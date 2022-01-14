import React from 'react'
import { StyleSheet, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as RootNavigation from './RootNavigation'


const ExitButton = () => {

    const navigation = useNavigation();
    
    const exitAlert = () =>
        Alert.alert(
        "Are you sure?",
        "Information will be deleted",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Still Goin"),
                style: "cancel",
            },
            {
                text: "Quit",
                onPress: () => RootNavigation.replace('Dashboard')
            }
        ],
        {
        cancelable: false,
        }
    );

    return (
            <Button  
            onPress={() =>{ exitAlert() }} 
               title="Exit"
               color="grey" 
            />
    )
}

export default ExitButton

const styles = StyleSheet.create({
})
