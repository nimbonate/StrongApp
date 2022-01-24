import React from 'react'
import { StyleSheet, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as RootNavigation from './RootNavigation'

//This component gets us out of the fact finder screen, (or any other screen within the stack that needs an exit)
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
                text: "Exit",
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
