import React from 'react'
import { StyleSheet, Switch, Button, Text, TextInput, View } from 'react-native'

//Need to add an anchor phrase. Something that the agent can tell the referrals to establish a
//connection to the client.

const Referrals = ({hasspouse,
                reffname1, setreffname1,
                reflname1, setreflname1,
                refphone1, setrefphone1,
                refaddy1, setrefaddy1,
                reffname2, setreffname2,
                reflname2, setreflname2,
                refphone2, setrefphone2,
                refaddy2, setrefaddy2,
                reffname3, setreffname3,
                reflname3, setreflname3,
                refphone3, setrefphone3,
                refaddy3, setrefaddy3,
                reffname4, setreffname4,
                reflname4, setreflname4,
                refphone4, setrefphone4,
                refaddy4, setrefaddy4,
                reffname5, setreffname5,
                reflname5, setreflname5,
                refphone5, setrefphone5,
                refaddy5, setrefaddy5,
                reffname6, setreffname6,
                reflname6, setreflname6,
                refphone6, setrefphone6,
                refaddy6, setrefaddy6,
                reffname7, setreffname7,
                reflname7, setreflname7,
                refphone7, setrefphone7,
                refaddy7, setrefaddy7,
                reffname8, setreffname8,
                reflname8, setreflname8,
                refphone8, setrefphone8,
                refaddy8, setrefaddy8,
                reffname9, setreffname9,
                reflname9, setreflname9,
                refphone9, setrefphone9,
                refaddy9, setrefaddy9,
                reffname0, setreffname0,
                reflname0, setreflname0,
                refphone0, setrefphone0,
                refaddy0, setrefaddy0,
                refnumber, setrefnumber,
                isKeyboardVisible
                }) => {
    
    const refAdd = () => setrefnumber(previousState => previousState + 1)
    const refSub = () => setrefnumber(previousState => previousState - 1)

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Referrals</Text>
            <Text style={styles.lableText}>Referral #1</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname1} onChangeText={(value) => {setreffname1(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname1} onChangeText={(value) => {setreflname1(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone1.toString()} onChangeText={(value) => {setrefphone1(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy1} onChangeText={(value) => {setrefaddy1(value)}}/>
                </View>
            </View>
            { refnumber > 1 ? <>
            <Text style={styles.lableText}>Referral #2</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname2} onChangeText={(value) => {setreffname2(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname2} onChangeText={(value) => {setreflname2(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone2.toString()} onChangeText={(value) => {setrefphone2(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy2} onChangeText={(value) => {setrefaddy2(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 2 ? <>
            <Text style={styles.lableText}>Referral #3</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname3} onChangeText={(value) => {setreffname3(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname3} onChangeText={(value) => {setreflname3(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone3.toString()} onChangeText={(value) => {setrefphone3(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy3} onChangeText={(value) => {setrefaddy3(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 3 ? <>
            <Text style={styles.lableText}>Referral #4</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname4} onChangeText={(value) => {setreffname4(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname4} onChangeText={(value) => {setreflname4(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone4.toString()} onChangeText={(value) => {setrefphone4(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy4} onChangeText={(value) => {setrefaddy4(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 4 ? <>
            <Text style={styles.lableText}>Referral #5</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname5} onChangeText={(value) => {setreffname5(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname5} onChangeText={(value) => {setreflname5(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone5.toString()} onChangeText={(value) => {setrefphone5(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy5} onChangeText={(value) => {setrefaddy5(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 5 ? <>
            <Text style={styles.lableText}>Referral #6</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname6} onChangeText={(value) => {setreffname6(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname6} onChangeText={(value) => {setreflname6(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone6.toString()} onChangeText={(value) => {setrefphone6(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy6} onChangeText={(value) => {setrefaddy6(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 6 ? <>
            <Text style={styles.lableText}>Referral #7</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname7} onChangeText={(value) => {setreffname7(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname7} onChangeText={(value) => {setreflname7(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone7.toString()} onChangeText={(value) => {setrefphone7(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy7} onChangeText={(value) => {setrefaddy7(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 7 ? <>
            <Text style={styles.lableText}>Referral #8</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname8} onChangeText={(value) => {setreffname8(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname8} onChangeText={(value) => {setreflname8(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone8.toString()} onChangeText={(value) => {setrefphone8(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy8} onChangeText={(value) => {setrefaddy8(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 8 ? <>
            <Text style={styles.lableText}>Referral #9</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname9} onChangeText={(value) => {setreffname9(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname9} onChangeText={(value) => {setreflname9(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone9.toString()} onChangeText={(value) => {setrefphone9(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy9} onChangeText={(value) => {setrefaddy9(value)}}/>
                </View>
            </View>
            </> : null}
            { refnumber > 9 ? <>
            <Text style={styles.lableText}>Referral #10</Text>
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
                    <TextInput style={styles.textInputStyle} value={reffname0} onChangeText={(value) => {setreffname0(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={reflname0} onChangeText={(value) => {setreflname0(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Phone</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Address</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} keyboardType={'phone-pad'} value={refphone0.toString()} onChangeText={(value) => {setrefphone0(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={refaddy0} onChangeText={(value) => {setrefaddy0(value)}}/>
                </View>
            </View>
            </> : null}
            <View style={{height: 10}}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    { refnumber > 1 ? <Button 
                        title="Remove Referral"
                        onPress={refSub}
                    />: null }
                </View>
                <View style={{flex: .05}}/>
                <View style={{flex:1}}>
                { refnumber < 10 ? <Button 
                        title="Add Referral"
                        onPress={refAdd}
                    />  : null }
                </View>
            </View>
            {isKeyboardVisible ? <View style={{height:260}}/>:null}
        </View>
    )
}

export default Referrals

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 20,
    },
    lableText: {
        marginTop: 3
    },
    fullWidth: {
        minWidth: '80%',
        marginBottom: 20,
    },
    textInputStyle: {
        width: '95%',
        height: 48,
        borderWidth:2,
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
    }
})

