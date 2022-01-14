import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

const Autofill = ({
    hasspouse,
    fname1, setfname1,
    lname1, setlname1,
    fname2, lname2,
    ssn1, setssn1,
    ssn2, setssn2,
    homephone, sethomephone, cell1, setcell1,
    cell2, address, setaddress,
    city, setcity, state, setstate, zip, setzip,
    searchname, setSearchname,
    clientIndex, setClientIndex,
}) => {
//
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);

    
    //Function to get list of clients from search parameters.
    const getClients = () => {
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
            return setData(responseJson);
        })
        .catch((error) => {
            console.error(error);
        })
    } 
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
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
                return setData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            })
        }, 10)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchname])

    const getDetails = (client) => {
        //Getting Selected Client Details
        return fetch('https://app.agencybloc.com/api/v1/individuals/detail', {
            method: 'POST',
            headers: new Headers({
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:
                `sid=ZXN6Z3P49T690CFX8WWE&key=77e5c5c6656c46ccf6d3254dc1c89db5b8ec82c8&individualID=${client.individualID}`
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return setDetail(responseJson), console.log(client), console.log(detail);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    //Function to fill in Fact Finder with current Client Data
    const fillData = (client) => {
        //Fill Basic Info
        setfname1(client.firstName)
        setlname1(client.lastName)
        sethomephone(client.homePhone)
        setcell1(client.cellPhone)
        getDetails(client)
        getDetails(client)

    }

    //On this first TextInput, I really need to find a way to make the onChangeText trigger the getClients function so
    //that the client list updates as the user type.
    return(
        <View style={{ flex: 1, paddingTop: 10}}>
           <View style={{flexDirection:'row'}}>
                <View style={styles.inputContainer, {flex:1}}>
                    <TextInput style={styles.input} placeholder='Last Name' value={searchname} onChangeText={(value) => {
                        setSearchname(value)
                        //Resets the selected items style
                        setClientIndex(null)
                        }}/>
                </View>
            </View>
                {/*<TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    //calls the AgencyBloc API function created above
                    getClients()
                    //Resets the selected items style
                    setClientIndex(null)}}
                >
                    <Text style={styles.buttonText}>Search Clients</Text>
                </TouchableOpacity>*/}
            <View style={{height: 20}}/>
            <Text style={{textAlign:'center'}}>Results</Text>
                {data.map((client, index) => (
                //^^Parses the Agency Bloc response then VV renders a TouchableOpacity for each client (Up to 10000 characters)
                <TouchableOpacity
                    key={index}
                    //Conditionally renders using buttonOutline if the clientIndex that was pressed matches
                    //the one rendered with that index
                    style={ clientIndex == index  ? styles.buttonOutline : styles.button}
                    onPress={() => {
                        setClientIndex(index)
                        fillData(client)
                        getClients()
                    }}
                >
                    <Text style={ clientIndex == index ? styles.buttonOutlineText : styles.buttonText}>{client.firstName} {client.lastName}</Text>
                </TouchableOpacity>
            ))}
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