import React, { useState, useEffect } from 'react'
import { 
    Switch, 
    Keyboard, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet, 
    Text, 
    View, 
    Modal,
    ScrollView 
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { db, authentication } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore/lite'

//Form for creating a new appointment
const NewAppt = ({ navigation }) => {

    const [fname1, setfname1] = useState('')
    const [fname2, setfname2] = useState('')
  
    const [hasspouse, sethasspouse] = useState(false)

    const [lname1, setlname1] = useState('')
    const [lname2, setlname2] = useState('')

    const [homephone, sethomephone] = useState('')
    const [cell1, setcell1] = useState('')
    const [cell2, setcell2] = useState('')

    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zip, setzip] = useState('')

    const [houseMarking, setHouseMarking] = useState('');//typical how to find the house answer

    const [healthConcerns, setHealthConcerns] = useState('');//Recent health issues.

    const [swept, setSwept] = useState(false);//This remains false until the appointment is swept and marked by an Admin

    const [queue, setQueue] = useState(false);//Set to True if this appointment is available for split

    const [settingAgent, setSettingAgent] = useState(`${authentication.currentUser.email}`);


    //Date Time Picker Stuff
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
    
    const showDatepicker = () => {
        setShow(true);
        setMode('date');
        console.log(date)
    };
    
    const showTimepicker = () => {
        setShow(true);
        setMode('time');
        console.log(date)
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
    const toggleSwitch = () => {sethasspouse(previousState => !previousState), setShow(false)};
    const toggleSplit = () => {setQueue(previousState => !previousState), setShow(false)};



    //This is where the Firebase database is updated... well ideally
    const NewAppointment = doc(db, `Appointments/${fname1}_${lname1}_Appt`)
    const SubmitNewAppt = () => {
        setSettingAgent(authentication.currentUser.email)
        const ApptData = {
            SchedulingAgent: `${settingAgent}`,
            FirstName:`${fname1}`,
            LastName:`${lname1}`,
            HasSpouse:`${hasspouse}`,
            SpouseFirstName:`${fname2}`,
            SpouseLastName:`${lname2}`,
            HomePhone:`${homephone}`,
            CellPhone:`${cell1}`,
            SpouseCellPhone:`${cell2}`,
            Address:`${address}`,
            City:`${city}`,
            State:`${state}`,
            Zip:`${zip}`,
            HouseMarking:`${houseMarking}`,
            HealthConcerns:`${healthConcerns}`,
            DateTime:`${formatDate()}`,
            Swept:`${swept}`,
            Queue:`${queue}`
        }
        setDoc(NewAppointment, ApptData);
    }

    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

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
            <ScrollView style={{marginHorizontal:5, height:'90%'}}>
                <Text style={styles.titleText}>New Appointment</Text> 
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>First Name</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Last Name</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={fname1} onChangeText={(value) => {setfname1(value)}}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={lname1} onChangeText={(value) => {setlname1(value)}}/>
                    </View>
                </View>
                
                <Text style={styles.lableText}>Do you have a Spouse?</Text>
                <Switch 
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={hasspouse ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={hasspouse}
                />
                { hasspouse ? <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Spouse First Name</Text> 
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Spouse Last Name</Text>
                    </View> 
                </View> : null}
                { hasspouse ? <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={fname2} onChangeText={(value) => {setfname2(value)}}/> 
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={lname2} onChangeText={(value) => {setlname2(value)}}/> 
                    </View>
                </View> 
                : null}
                <Text style={styles.lableText}>Home Phone</Text>
                <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={homephone} onChangeText={(value) => {sethomephone(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Cell Phone</Text>
                    </View>
                    { hasspouse ? <View style={{flex:1}}>
                        <Text style={styles.lableText}>Spouse Cell Phone</Text>
                    </View> : null}
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={cell1} onChangeText={(value) => {setcell1(value)}}/>
                    </View>
                    { hasspouse ? <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={cell2} onChangeText={(value) => {setcell2(value)}}/>
                    </View> : null}
                </View>
                <Text>Address</Text>
                <TextInput style={styles.textInputStyle} value={address} onChangeText={(value) => {setaddress(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>City</Text>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text>State</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Zip</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={city} onChangeText={(value) => {setcity(value)}}/>
                    </View>
                    <View style={{flex:0.5}}>
                        <TextInput style={styles.textInputStyle} value={state} onChangeText={(value) => {setstate(value)}}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} keyboardType='numeric' value={zip.toString()} onChangeText={(value) => {setzip(value)}}/>
                    </View>
                </View>
                
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
                    <View style={styles.buttonContainer, {flex:1}}>
                        <TouchableOpacity style={styles.buttonOutline}>
                            <Text style={styles.buttonOutlineText}>{formatDate()}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal 
                    visible={show}
                    style={{height:800}}
                    transparent='true'>
                    <View style={styles.modalView}>
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
                        <TextInput style={styles.responseInputStyle} value={houseMarking} onChangeText={(value) => {setHouseMarking(value)}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Health Concerns</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.responseInputStyle} value={healthConcerns} onChangeText={(value) => {setHealthConcerns(value)}}/>
                    </View>
                </View>
                <Text style={styles.lableText}>Available for Split?</Text>
                <Switch 
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={ queue ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleSplit}
                    value={queue}
                />
                {isKeyboardVisible ? <View style={{height:260}}/>:null}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {SubmitNewAppt()}}>
                    <Text style={styles.buttonText}>Submit for Sweep</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default NewAppt

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        paddingBottom: 20
    },
    lableText: {
        marginTop: 3
    },
    fullWidth: {
        minWidth: '80%',
        marginBottom: 20,
    },
    button: {  
        flex: 1,
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginTop:10,
        marginBottom:20,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'

    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        color: 'rgba(0, 0, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        height: 80,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    textInputStyle: {
        width: '95%',
        height: 48,
        borderWidth: 2,
        borderColor: 'rgba(55, 55, 55, .5)',
        paddingLeft: 10,
        borderRadius: 4,
        backgroundColor: 'rgba(156,167,226,0.6)',
    },
    responseInputStyle: {
        width: '95%',
        height: 144,
        borderWidth: 2,
        borderColor: 'rgba(55, 55, 55, .5)',
        paddingLeft: 10,
        textAlignVertical: 'top',
        borderRadius: 4,
        backgroundColor: 'rgba(156,167,226,0.6)',
    },
    modalView: {
        flex: 1,
        margin: 20,
        marginVertical: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
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