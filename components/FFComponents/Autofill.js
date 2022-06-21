import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { styles, PlaceholderTextColor } from '../styles'
import { basicsForm } from '../../screens/Agent/FactFinder'

//This Page needs to be improved to additionally fill in policy data and 
//other details. This requires a second API call, and due to the acyncronous
//nature of the API call, I cannot get it to work quite yet. 

const Autofill = ({
    hasSpouse, individualID, setindividualID,
    firstName, setfirstName,
    lastName, setlasName,
    spouseFirstName, spouseLastName, setspouseLastName, setspouseFirstName,
    ssn1, setssn1,
    ssn2, setssn2,
    Phone1, setPhone1, Phone2, setPhone2,
    Phone3, address, setaddress,
    city, setcity, state, setstate, zip, setzip,
    searchname, setsearchname,
    clientIndex, setClientIndex
}) => {

    const [data, setData] = useState([]);

    const clearData = () => {
        setfirstName('')
        setlasName('')
        setspouseFirstName('')
        setspouseLastName('')
        setPhone1('')
    }


    //Function to fill in Fact Finder with current Client Data
    const fillData = (data) => {
        setfirstName(data.firstName)
        setlasName(data.lastName)
        setPhone1(data.homePhone)
    }

    //useEffect runs this code on refresh so that the list is updated as the user types.
    //This is required because a regular function uses a stale state and lags one letter behind
    useEffect(() => {
        if (searchname) {
            //Calls AgencyBloc API for Client info
            const delayDebounceFn = setTimeout(() => {//creates a timer that reruns setEffect 
            return fetch('https://app.agencybloc.com/api/v1/individuals/search', {
            method: 'POST',
            headers: new Headers({
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:
                `sid=ZXN6Z3P49T690CFX8WWE&key=77e5c5c6656c46ccf6d3254dc1c89db5b8ec82c8&lastName=${searchname}`
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return setData(responseJson.slice(0,50));
            })
            .catch((error) => {
                console.error(error);
            }) 
            }, 10)
            return () => clearTimeout(delayDebounceFn)//This is a part of that top thing.
        } else {

        }
    }, [searchname])

    

    return(
        <View style={styles.container}>
            <View style={{height:10}}/>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                    placeholder='Last Name' 
                    placeholderTextColor= {PlaceholderTextColor} 
                    value={searchname} 
                    onChangeText={(value) => {
                        setsearchname(value)//sets our API call search name without setting lastName
                        setClientIndex(null)//resets the selection UI
                        clearData()//Clears autofilled data so agents can start a new client fact finder
                    }}/>
            </View>
            <View style={{height: 20}}/>

            <Text style={{textAlign:'center'}}>Search Existing Clients</Text>
            {data.map((client, index) => (
                //^^Parses the Agency Bloc response then VV renders a TouchableOpacity for each client (Up to 10000 characters)
                <TouchableOpacity
                    key={index}
                    //Conditionally renders using buttonOutline if the clientIndex that was pressed matches
                    //the one rendered with that index
                    style={ clientIndex == index  ? styles.buttonOutline : styles.button}
                    onPress={() => {
                        setClientIndex(index)//Sets selected UI as target for style change
                        setindividualID(client.individualID)
                        fillData(client)//runs the function to fill states with client data
                    }}
                    >
                    <Text style={ clientIndex == index ? styles.buttonOutlineText : styles.buttonText}>{client.firstName} {client.lastName}</Text>
                </TouchableOpacity> 
            ))}
            { searchname ? <Text style={{textAlign:'center', paddingTop: 25, paddingBottom: 25}}>First 50 clients shown</Text>
            : null }
        </View>
    )
}

export default Autofill
