import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Basics = ({setfname1, fname1,  
            setlname1, lname1, 
            sethasspouse, hasspouse,
            setfname2, fname2,
            setlname2, lname2,
            sethomephone, homephone,
            setcell1, cell1,
            setcell2, cell2, 
            setocc1, occ1, 
            setocc2, occ2,
            setaddress, address,
            setcity, city,
            setstate, state,
            setzip, zip,
            clientIndex}) => {

    const toggleSwitch = () => sethasspouse(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            { clientIndex!=null ? <Text style={styles.titleText}>Basics Update</Text>
            : <Text style={styles.titleText}>Basics</Text> }
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
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Occupation</Text>
                </View>
                { hasspouse ? <View style={{flex:1}}>
                    <Text style={styles.lableText}>Spouse Occupation</Text>
                </View> : null}
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={occ1} onChangeText={(value) => {setocc1(value)}}/>
                </View>
                { hasspouse ? <View style={{flex:1}}>
                    <TextInput style={styles.textInputStyle} value={occ2} onChangeText={(value) => {setocc2(value)}}/>
                </View>: null}
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
        </View>
    )
}

export default Basics

const styles = StyleSheet.create({
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
    }
})
