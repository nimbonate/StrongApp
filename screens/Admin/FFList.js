import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'



const FFList = () => {

    const [FactFinderList, setFactFinderList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);
    //gets the data from firestore and sets it as FactFinderList
    const getFFs = async() => {
        const FFCollection = collection(db, 'factFinders');
        const FFsnapshot = await getDocs(FFCollection);
        setFactFinderList(FFsnapshot.docs);
    }
    

    useEffect(() => {
      getFFs();
    }, []);
    

    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Submitted Fact Finders</Text>
            {FactFinderList.map((doc, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => {setdocData(doc.data()) + setmodalVisible(true)}}
                    >
                    <Text style={styles.buttonText}>{doc.id}</Text>
                </TouchableOpacity>
            ))}
            { modalVisible ? <Modal
                style={{height:800}}
                visible={modalVisible}
                transparent='true'>
                <View style={styles.modalView}>
                    {/*Fact Finder Information Shown Here*/}
                    <Text>Submiting Agent: {docData.Agent}</Text>
                    <Text>{docData.Basics.FirstName} {docData.Basics.LastName}</Text>
                    { docData.Basics.HasSpouse ? <Text>{docData.Basics.SpouseFirstName} {docData.Basics.SpouseLastName}</Text> : null}
                    <Text>{docData.Basics.FirstName} SSN: {docData.Basics.SSN}</Text>
                    { docData.Basics.HasSpouse && docData.Basics.SpouseSSN != 0 ? <Text>{docData.Basics.SpouseFirstName} SSN: {docData.Basics.SpouseSSN}</Text> : null}
                    <Text>Home Phone: { docData.Basics.HomePhone}</Text>
                    { docData.Basics.Cellphone ? <Text>Cell Phone: { docData.Basics.Cellphone }</Text> : null}

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {setmodalVisible(false)}}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default FFList

const styles = StyleSheet.create({
    button: {  
        backgroundColor: '#E74212',
        width: '100%',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center'
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
    },
    modalView: {
        flex: 1,
        margin: 20,
        marginVertical: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
     
})
