import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Modal, ScrollView, Keyboard } from 'react-native'
import { db, authentication } from '../../firebase'
import { collection, query, getDocs, doc, updateDoc, where } from 'firebase/firestore/lite'
import { styles, PlaceholderTextColor } from '../../components/styles'

const MyAppointments = ({ navigation }) => {

    const [setList, setSetList] = useState([]);
    const [splitList, setSplitList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);
    const [dataRead, setDataRead] = useState(false);


    const getSetAppts = async() => {
        const ApptCollection1 = query(collection(db, 'Appointments'), 
            where("SchedulingAgent", "==", authentication.currentUser.email), 
            where("Split", "==", false), 
            where("Swept", "==", true));
        const setSnapshot = await getDocs(ApptCollection1);
        setSetList(setSnapshot.docs);
    }
    
    const getSplitAppts = async() => {
        const ApptCollection2 = query(collection(db, 'Appointments'), 
            where("RunningAgent", "==", authentication.currentUser.email),
            where("Swept", "==", true));
        const splitSnapshot = await getDocs(ApptCollection2);
        setSplitList(splitSnapshot.docs);
    }


    useEffect(() => {
        if (!dataRead) {
        getSetAppts();
        getSplitAppts();
        setDataRead(true)
        console.log('My Appts useEffect Ran Conditionally')
        }
    })

    //Keep Past Appointments for 2 weeks

    
    return (
        <View style={{ flex: 1, padding: 10}}>
        <View style={{height: 80}}/>
        <Text style={styles.reviewText}>My Set Appointments</Text>
        {setList.map((doc, index) => (
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
        <Text style={styles.reviewText}>My Split Appointments</Text>
        {splitList.map((doc, index) => (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => {
                    setdocData(doc.data())
                    setmodalVisible(true)
                    setDataRead(false)
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
                style={styles.buttonOutline}
                onPress={() => {
                    setmodalVisible(false)}}>
                    <Text style={styles.buttonOutlineText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal> : null }
    </View>
    )
}

export default MyAppointments
