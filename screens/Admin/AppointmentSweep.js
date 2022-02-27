import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import { styles, adminStyles } from '../../components/styles'

//Admin Page for Sweeping and marking current appointments
//this will help prevent people from wasting their own time, and marche's time.
const AppointmentSweep = () => {

    const [sweepList, setSweepList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);

    const getSweeps = async() => {
        const SweepCollection = collection(db, 'Appointments');
        const SweepSnapshot = await getDocs(SweepCollection);
        setSweepList(SweepSnapshot.docs);
    }

    useEffect(() => {
        getSweeps();
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
                    <Text style={adminStyles.buttonText}>{doc.id}</Text>
                </TouchableOpacity>
            ))}
            { modalVisible ? <Modal
                style={{height:800}}
                visible={modalVisible}
                transparent='true'>
                <View style={styles.modalView}>
                    {/*Appointment Information Shown Here*/}
                    <Text>Submiting Agent: {docData.SchedulingAgent}</Text>
                    <Text>Name: {docData.FirstName} {docData.LastName}</Text>
                    { docData.HasSpouse ? <Text>Spouse Name: {docData.SpouseFirstName} {docData.SpouseLastName}</Text>
                    : null }
                    <Text>Home Phone: {docData.HomePhone} </Text>
                    { docData.CellPhone ? <Text>Cell: {docData.CellPhone} </Text>
                    : null }
                    { docData.HasSpouse && docData.SpouseCellPhone ? <Text>Spouse Cell: {docData.SpouseCellPhone}</Text>
                    : null }
                    <Text>Address: {docData.Address} </Text>
                    <Text>Address: {docData.City} {docData.State} {docData.Zip} </Text>
                    <Text>House Marking: {docData.HouseMarking}</Text>
                    <Text>Health Concerns: {docData.HealthConcerns}</Text>

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

