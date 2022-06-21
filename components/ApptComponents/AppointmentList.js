import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Modal, ScrollView, Keyboard } from 'react-native'
import { db, authentication } from '../../firebase'
import { collection, query, getDocs, doc, updateDoc, where } from 'firebase/firestore/lite'
import { styles, PlaceholderTextColor } from '../../components/styles'

const AppointmentList = ({ navigation }) => {

    const [apptList, setApptList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);
    const [dataRead, setDataRead] = useState(false);


    const getAppts = async() => {
        const ApptCollection = query(collection(db, 'Appointments'), where("Split", "==", true), where("RunningAgent", "==", ""));
        const ApptSnapshot = await getDocs(ApptCollection);
        setApptList(ApptSnapshot.docs);
    }
    
    //Claim Appointment
    const Claim = async() => {
        const ApptRef = doc(db, 'Appointments', `${docData.FirstName} ${docData.LastName}`)
        await updateDoc(ApptRef, {
            RunningAgent: authentication.currentUser.email,
        })
    }
    
    useEffect(() => {
        if (!dataRead) {
            getAppts();
            setDataRead(true);
            console.log('available Appts useEffect Ran within If')
        }
    })

    //List of Available Appointments
    return (
         <View style={{ flex: 1, padding: 10}}>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Available Appointments</Text>
            {apptList.map((doc, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => {
                        setdocData(doc.data())
                        setmodalVisible(true)
                        }}
                    >
                    <Text style={styles.buttonText}>{doc.id} {doc.LastName}</Text>
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
                    <Text style={styles.headingText}>Swept?: {docData.Swept}</Text>
                    <Text style={styles.headingText}>Sweep Notes:</Text>
                    <Text style={styles.reviewText}>{docData.SweepNotes}</Text>


                </ScrollView>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        Claim()
                        setmodalVisible(false)
                        setDataRead(false)

                    }}>
                        <Text style={styles.buttonText}>Claim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonOutline}
                    onPress={() => {
                        setmodalVisible(false)
                        setDataRead(false)}}>
                        <Text style={styles.buttonOutlineText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default AppointmentList

