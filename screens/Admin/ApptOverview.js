import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Modal, ScrollView, Keyboard } from 'react-native'
import { db } from '../../firebase'
import { collection, query, getDocs, where } from 'firebase/firestore/lite'
import { styles, adminStyles } from '../../components/styles'




//A place for admins to see who has what appointments.
const ApptOverview = () => {
    
    const [apptList, setApptList] = useState([]);
    const [oldApptList, setOldApptList] = useState([]);
    const [date, setDate] = useState(new Date());
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);
    const [dataRead, setDataRead] = useState(false);
    
    //Get firebase document info
    const getAppts = async() => {
        const ApptCollection = query(collection(db, 'Appointments'),
        where("DateTime", "<", date));
        const ApptSnapshot = await getDocs(ApptCollection);
        setApptList(ApptSnapshot.docs);
    }

    //Get firebase document info
    const getOldAppts = async() => {
        const OldApptCollection = query(collection(db, 'Appointments'),
        where("DateTime", ">", date));
        const OldApptSnapshot = await getDocs(OldApptCollection);
        setOldApptList(OldApptSnapshot.docs);
    }

    useEffect(() => {
        if (!dataRead) {
        getAppts();
        getOldAppts();
        setDataRead(true);
        console.log('ApptOverview UseEffect Ran')
        console.log(date)
        }
    })

    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Upcoming Appointments</Text>
            {apptList.map((doc, index) => (
                <View style={adminStyles.buttonHighlight}>
                <TouchableOpacity
                    key={index}
                    style={adminStyles.button}
                    onPress={() => {
                        setdocData(doc.data())
                        setmodalVisible(true)
                        }}
                    >
                    <Text style={adminStyles.buttonText}>{doc.id} {doc.LastName}</Text>
                </TouchableOpacity>
                </View>
            ))}
            <Text style={{textAlign:'center'}}>Old Appointments</Text>
            {oldApptList.map((doc, index) => (
                <View style={adminStyles.buttonHighlight}>
                <TouchableOpacity
                    key={index}
                    style={adminStyles.button}
                    onPress={() => {
                        setdocData(doc.data())
                        setmodalVisible(true)
                        }}
                    >
                    <Text style={adminStyles.buttonText}>{doc.id} {doc.LastName}</Text>
                </TouchableOpacity>
                </View>
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
                    style={adminStyles.buttonOutline}
                    onPress={() => {setmodalVisible(false)}}>
                        <Text style={adminStyles.buttonOutlineText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default ApptOverview
