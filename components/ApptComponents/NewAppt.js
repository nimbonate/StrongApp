import React, { useState, useEffect, useRef } from 'react'
import { 
    Switch, 
    Keyboard, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    TextInput, 
    Text, 
    View, 
    Modal,
    ScrollView 
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { db, authentication } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { styles, PlaceholderTextColor } from '../styles'

import {Formik} from 'formik'
import { newApptSchema } from '../FormValidation'


//Form for creating a new appointment
const NewAppt = ({ navigation }) => {

    
    //These are the values that formik and yup will check
    const apptForm = {
        
        hasSpouse: false,

        firstName: '',
        lastName: '',
        
        spouseFirstName: '',
        spouseLastName: '',
        
        Phone1: '',
        Phone2: '',
        
        Address: '',
        City: '',
        State: '',
        Zip: '',
        
        houseMarking: '',
        healthConcerns: ''
    }
    
    const formRef = useRef();
    
    //This is where the Firebase doc is created after formik and yup have validated the inputs
    const SubmitNewAppt = () => {
        const NewAppointment = doc(db, `Appointments/${formRef.current.values.firstName} ${formRef.current.values.lastName}`)
        const ApptData = {
            SchedulingAgent: authentication.currentUser.email,
            RunningAgent: '',
            FirstName:`${formRef.current.values.firstName}`,
            LastName:`${formRef.current.values.lastName}`,
            hasSpouse: formRef.current.values.hasSpouse,
            SpouseFirstName:`${formRef.current.values.spouseFirstName}`,
            SpouseLastName:`${formRef.current.values.spouseLastName}`,
            Phone1:`${formRef.current.values.Phone1}`,
            Phone2:`${formRef.current.values.Phone2}`,
            Address:`${formRef.current.values.Address}`,
            City:`${formRef.current.values.City}`,
            State:`${formRef.current.values.State}`,
            Zip:`${formRef.current.values.Zip}`,
            HouseMarking:`${formRef.current.values.houseMarking}`,
            HealthConcerns:`${formRef.current.values.healthConcerns}`,
            DateTime:`${date}`,
            Swept: false,
            SweepNotes: '',
            Split: `${Split}`
        }
        setDoc(NewAppointment, ApptData);
        return ApptData
    }
    
    const [Split, setSplit] = useState(false);
    
    //Date Time Picker Stuff
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };
    
    const showDatepicker = () => {
        setShow(true);
        setMode('date');
    };
    
    const showTimepicker = () => {
        setShow(true);
        setMode('time');
    };

    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 13);
    const today = new Date();

    //Formating the DateTime for display
    const formatDate = () => {
        var newDate = date;
    
        var sMonth = padValue(newDate.getMonth() + 1);
        var sDayW = padValue(newDate.getDay());
        var sDay = padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = padValue(newDate.getMinutes());
        var sAMPM = "AM";
        var iDayW= '';
    
        var iHourCheck = parseInt(sHour);
        var iDayCheck = parseInt(sDayW)
    
        if (iHourCheck > 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        }
        else if (iHourCheck === 0) {
            sHour = "12";
        }
        
        if ( iDayCheck == '00') {
            iDayW = 'Sunday';
        }
        else if (iDayCheck == '01' ) {
            iDayW = 'Monday';
        }
        else if (iDayCheck == '02' ) {
            iDayW = 'Tuesday';
        }
        else if (iDayCheck == '03' ) {
            iDayW = 'Wednesday';
        }
        else if (iDayCheck == '04' ) {
            iDayW = 'Thursday';
        }
        else if (iDayCheck == '05' ) {
            iDayW = 'Friday';
        }
        else if (iDayCheck == '06' ) {
            iDayW = 'Saturday';
        }
    
        sHour = padValue(sHour);
    
        return  iDayW + " " + sMonth + "-" + sDay + "-" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
    }
    
    const padValue = (value) => {
        return (value < 10) ? "0" + value : value;
    }
    //End Date Time picker Stuff

   
    //Changing the State of toggled values
    const toggleSplit = () => {setSplit(previousState => !previousState), setShow(false)};

    //Adds space for the keyboard when it's up
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)


    //Using useEffect to Check when keyboard is up
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true); 
            setShow(false)
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false);
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);

    return (
        <KeyboardAvoidingView style={styles.fullWidth}>
            <Formik
                //Prevents a dumb glitch
                enableReinitialize
                //validates based on the Form Validation Schema
                validationSchema={newApptSchema}
                initialValues={apptForm}
                //Prevents Errors from popping up as they type
                validateOnChange={false}
                //Used to reference values outside of Formik form
                innerRef={formRef}
                onSubmit={(values, actions)=>(
                    console.log(SubmitNewAppt()),
                    SubmitNewAppt(values),
                    navigation.navigate('Appointments')
                )}
            >
            {(props)=> (
            <>
            <ScrollView style={{marginHorizontal:5, height:'90%'}}>
                <Text style={styles.titleText}>New Appointment</Text> 
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                style={styles.textInputStyle} 
                                error='Invalid name' 
                                value={props.values.firstName} 
                                placeholder='First Name'
                                onChangeText={props.handleChange('firstName')}
                                maxLength={12}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput 
                                style={styles.textInputStyle} 
                                value={props.values.lastName} 
                                placeholder= 'Last Name'
                                onChangeText={props.handleChange('lastName')}
                                maxLength={12}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.firstName }</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.lastName }</Text>
                        </View>
                    </View>
                    <Text style={styles.lableText}>Do you have a Spouse?</Text>
                    <Switch 
                    style={{marginBottom:5}}
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={props.values.hasSpouse ? '#228B22' : '#f4f3f4'}
                    onValueChange={(value) => {
                        props.setFieldValue("hasSpouse", value);
                      }}
                      value={props.values.hasSpouse}
                    />
                    { props.values.hasSpouse ? <>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                            style={styles.textInputStyle} 
                            value={props.values.spouseFirstName}
                            placeholder='Spouse First Name'
                            onChangeText={props.handleChange('spouseFirstName')}
                            maxLength={12}/> 
                        </View>
                        <View style={{flex:1}}>
                            <TextInput 
                            style={styles.textInputStyle} 
                            value={props.values.spouseLastName} 
                            placeholder='Spouse Last Name'
                            onChangeText={props.handleChange('spouseLastName')}
                            maxLength={12}/> 
                        </View>
                    </View>
                    { props.errors.spouseFirstName || props.errors.spouseLastName ? <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.spouseFirstName}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.spouseLastName }</Text>
                        </View>
                    </View> : null }
                    </>: null}
                    <TextInput 
                    style={styles.textInputStyle} 
                    keyboardType={'phone-pad'} 
                    value={props.values.Phone1} 
                    placeholder='Phone Number'
                    onChangeText={props.handleChange('Phone1')}
                    maxLength={11}/>
                    { props.errors.Phone1 ? <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.Phone1 }</Text>
                        </View>
                    </View> : null }
                    <View style={{flexDirection:'row'}}>
                       
                        { props.values.hasSpouse ? <View style={{flex:1}}>
                            <TextInput 
                                style={styles.textInputStyle} 
                                keyboardType={'phone-pad'} 
                                value={props.values.Phone2} 
                                placeholder='Spouse Phone (Optional)'
                                onChangeText={props.handleChange('Phone2')}
                                maxLength={11}/>
                        </View> : null}
                        { props.errors.Phone2 ? <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.Phone2 }</Text>
                        </View> : null }
                    </View>
                    <TextInput 
                    style={styles.textInputStyle} 
                    value={props.values.Address} 
                    placeholder='Street Address'
                    onChangeText={props.handleChange('Address')}
                    maxLength={45}/>
                    { props.errors.Address ? <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.Address }</Text>
                        </View>
                    </View> : null }
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                            style={styles.textInputStyle} 
                            value={props.values.City} 
                            placeholder='City'
                            onChangeText={props.handleChange('City')}
                            maxLength={20}/>
                        </View>
                        <View style={{flex:0.5}}>
                            <TextInput 
                            style={styles.textInputStyle} 
                            value={props.values.State} 
                            placeholder='State'
                            onChangeText={props.handleChange('State')}
                            maxLength={15}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput 
                            style={styles.textInputStyle} 
                            keyboardType='numeric' 
                            value={props.values.Zip} 
                            placeholder='Zip'
                            onChangeText={props.handleChange('Zip')}
                            maxLength={5}/>
                        </View>
                    </View>
                    { props.errors.City || props.errors.State || props.errors.Zip ? 
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.City }</Text>
                        </View>
                        <View style={{flex:.5}}>
                            <Text style={styles.errorText}>{ props.errors.State }</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.Zip }</Text>
                        </View>
                    </View> : null }
                    
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity style={styles.button} onPress={showDatepicker}>
                                <Text style={styles.buttonText}>Choose Date</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:.05}}/>
                        <View style={{flex:1}}>
                            <TouchableOpacity style={styles.button} onPress={showTimepicker}>
                                <Text style={styles.buttonText}>Choose Time</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={styles.infoOutline}>
                                <Text style={styles.buttonOutlineText}>{formatDate()}</Text>
                            </View>
                        </View>
                    </View>
                    <Modal 
                    visible={show}
                    style={{height:800}}
                    transparent='true'>
                        <View style={styles.modalView}>
                            <View style={{height:150}}/>
                            <View style={{width:'100%'}}>
                                <DateTimePicker
                                textColor='black'
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                minuteInterval={30}
                                maximumDate={twoWeeksFromNow}
                                minimumDate={today}
                                display="spinner"
                                onChange={onChange}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                style={styles.button}
                                onPress={() => {setShow(false)}}>
                                    <Text style={styles.buttonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.lableText}>House Identifier</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                multiline
                                style={styles.responseInputStyle} 
                                value={props.values.houseMarking} 
                                onChangeText={props.handleChange('houseMarking')}/>
                        </View>
                    </View>
                    { props.errors.houseMarking ? <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.houseMarking }</Text>
                        </View>
                    </View> : null }
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.lableText}>Health Concerns</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                multiline
                                style={styles.responseInputStyle} 
                                value={props.values.healthConcerns} 
                                onChangeText={props.handleChange('healthConcerns')}/>
                        </View>
                    </View>
                    { props.errors.healthConcerns ? <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.errorText}>{ props.errors.healthConcerns }</Text>
                        </View>
                    </View> : null }
                    <Text style={styles.lableText}>Available for Split?</Text>
                    <Switch 
                    style={{marginBottom:5}}
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={ Split ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleSplit}
                    value={Split}
                    />
                {isKeyboardVisible ? <View style={{height:260}}/>:null}
            </ScrollView>
            <View style={styles.fullWidth}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(
                        props.handleSubmit)}>
                    <Text style={styles.buttonText}>Submit for Sweep</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
            </Formik>
        </KeyboardAvoidingView>
    )
}

export default NewAppt