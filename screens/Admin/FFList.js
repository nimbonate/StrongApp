import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import { styles, adminStyles } from '../../components/styles'


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
                    style={adminStyles.button}
                    onPress={() => {setdocData(doc.data()) + setmodalVisible(true)}}
                    >
                    <Text style={adminStyles.buttonText}>{doc.id}</Text>
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
                    style={adminStyles.button}
                    onPress={() => {setmodalVisible(false)}}>
                        <Text style={adminStyles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default FFList

