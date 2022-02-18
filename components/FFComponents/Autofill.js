import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'


//This Page needs to be improved to additionally fill in policy data and 
//other details. This requires a second API call, and due to the acyncronous
//nature of the API call, I cannot get it to work quite yet. 

const Autofill = ({
    hasspouse, individualID, setindividualID,
    fname1, setfname1,
    lname1, setlname1,
    fname2, lname2, setlname2, setfname2,
    ssn1, setssn1,
    ssn2, setssn2,
    homephone, sethomephone, cell1, setcell1,
    cell2, address, setaddress,
    city, setcity, state, setstate, zip, setzip,
    searchname, setsearchname,
    clientIndex, setClientIndex
}) => {

    const [data, setData] = useState([]);

    const clearData = () => {
        setfname1('')
        setlname1('')
        setfname2('')
        setlname2('')
        sethomephone('')
        setssn1('')
        console.log('Data Reset')
    }


    //Function to fill in Fact Finder with current Client Data
    const fillData = (data) => {
        setfname1(data.firstName)
        setlname1(data.lastName)
        sethomephone(data.homePhone)
        setssn1(data.ssn)
        console.log(data.firstName + ' set as client') 
    }

    //useEffect runs this code on refresh so that the list is updated as the user types.
    //This is required because a regular function uses a stale state and lags one letter behind
    useEffect(() => {
        if (searchname) {
            //Calls AgencyBloc API for Client info
            const delayDebounceFn = setTimeout(() => {//creates a timer that reruns setEffect 
            console.log(searchname)
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
            console.log('No Searchname')
        }
    }, [searchname])

    

    //On this first TextInput, I really need to find a way to make the onChangeText trigger the getClients function so
    //that the client list updates as the user type.
    return(
        <View style={{ flex: 1, paddingTop: 10}}>
           <View style={{flexDirection:'row'}}>
                <View style={styles.inputContainer, {flex:1}}>
                    <TextInput style={styles.input} 
                        placeholder='Last Name' 
                        value={searchname} 
                        onChangeText={(value) => {
                            setsearchname(value)//sets our API call search name without setting lname1
                            setClientIndex(null)//resets the selection UI
                            clearData()//Clears autofilled data so agents can start a new client fact finder
                        }}/>
                </View>
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

const styles = StyleSheet.create({
    button: {  
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#0782f9',
        borderWidth: 2,
    },
    buttonOutline: {
        width: '100%',
        padding: 15,
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#0782f9',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    }
})