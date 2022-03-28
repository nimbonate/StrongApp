import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Modal, ScrollView, Keyboard } from 'react-native'
import { db } from '../../firebase'
import { collection, where, query, getDocs, doc, document } from 'firebase/firestore/lite'
import { styles, adminStyles } from '../../components/styles'

//Admin Page for Sweeping and marking current appointments
//this will help prevent people from wasting their own time, and marche's time.
const AppointmentSweep = () => {

    const [sweepList, setSweepList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);

    //For giving extra room at the bottom when the keyboard is up
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    //Get firebase document info
    const getSweeps = async() => {
        const SweepCollection = query(collection(db, 'Appointments'), where("Swept", "==", false));
        const SweepSnapshot = await getDocs(SweepCollection);
        setSweepList(SweepSnapshot.docs);
    }


    useEffect(() => {
            const keyboardDidShowListener = Keyboard.addListener(
              'keyboardDidShow',
              () => {
                setKeyboardVisible(true); 
              }
            );
            const keyboardDidHideListener = Keyboard.addListener(
              'keyboardDidHide',
              () => {
                setKeyboardVisible(false);
              }
            );
            getSweeps();
        
            return () => {
              keyboardDidHideListener.remove();
              keyboardDidShowListener.remove();
            };
          }, []);
    

    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Submitted Appointments</Text>
            {sweepList.map((doc, index) => (
                <TouchableOpacity
                    key={index}
                    style={adminStyles.button}
                    onPress={() => {setdocData(doc.data()) + setmodalVisible(true)}}
                    >
                    <Text style={adminStyles.buttonText}>{doc.id} {doc.LastName}</Text>
                </TouchableOpacity>
            ))}
            { modalVisible ? <Modal
                style={{height:800}}
                visible={modalVisible}
                transparent='true'>
                <View style={styles.modalView}>
                <ScrollView style={{width:'100%'}}>
                    {/*Appointment Information Shown Here*/}
                    <Text style={styles.headingText}>Submiting Agent:</Text>
                    <Text style={styles.reviewText}>{docData.SchedulingAgent}</Text>
                    <Text style={styles.headingText}>Name: {docData.FirstName} {docData.LastName}</Text>
                    { docData.hasSpouse ? <>
                        <Text style={styles.headingText}>Spouse: {docData.SpouseFirstName} {docData.SpouseLastName}</Text>
                    </>: null }
                    <Text style={styles.headingText}>Phone 1: {docData.Phone1}</Text>
                    { docData.Phone2 ? <>
                        <Text style={styles.headingText}>Phone 2: {docData.Phone2} </Text>
                    </>: null }
                    <Text style={styles.headingText}>Address:</Text>
                    <Text style={styles.reviewText}>{docData.Address} </Text>
                    <Text style={styles.reviewText}> {docData.City} {docData.State} {docData.Zip} </Text>
                    <Text style={styles.headingText}>House Marking:</Text>
                    <Text style={styles.reviewText}>{docData.HouseMarking}</Text>
                    <Text style={styles.headingText}>Health Concerns:</Text>
                    <Text style={styles.reviewText}>{docData.HealthConcerns}</Text>
                    <View
                    style={{height: 10}}/>
                    <Text style={styles.headingText}>Sweep Notes:</Text>
                    <TextInput
                        multiline
                        style={styles.responseInputStyle}
                        value={docData.sweepNotes}
                        //onChangeText={(value) => {setsweepNotes(value)}}
                        />
                    {isKeyboardVisible ? <View style={{height:260}}/>:null}

                </ScrollView>
                    <TouchableOpacity
                    style={adminStyles.button}
                    onPress={() => {}}>
                        <Text style={adminStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={adminStyles.buttonOutline}
                    onPress={() => {setmodalVisible(false)}}>
                        <Text style={adminStyles.buttonOutlineText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default AppointmentSweep

