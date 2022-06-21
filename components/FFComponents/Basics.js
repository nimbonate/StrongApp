import React, { useState, useEffect } from 'react'
import { Switch, Text, TextInput, View } from 'react-native'

import { styles, PlaceholderTextColor } from '../styles'
import {Formik} from 'formik'

const Basics = ({setfirstName, firstName,  
            setlasName, lastName, 
            sethasSpouse, hasSpouse,
            setspouseFirstName, spouseFirstName,
            setspouseLastName, spouseLastName,
            setPhone1, Phone1,
            setPhone2, Phone2,
            setPhone3, Phone3, 
            setocc1, occ1, 
            setocc2, occ2,
            setaddress, address,
            setcity, city,
            setstate, state,
            setzip, zip,
            clientIndex, individualID,
            isKeyboardVisible
}) => {
    
    

    const toggleSwitch = () => sethasSpouse(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            { clientIndex!=null ? <Text style={styles.titleText}>Basics Update</Text>
            : <Text style={styles.titleText}>Basics</Text> }
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='First Name' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={firstName} 
                        onChangeText={(value) => {setfirstName(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Last Name' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={lastName} 
                        onChangeText={(value) => {setlasName(value)}}/>
                </View>
            </View>
            
            <Text style={styles.lableText}>Do you have a Spouse?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasSpouse ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={hasSpouse}
            />
            { hasSpouse ? <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Spouse First' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={spouseFirstName} 
                        onChangeText={(value) => {setspouseFirstName(value)}}/> 
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Spouse Last' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={spouseLastName} 
                        onChangeText={(value) => {setspouseLastName(value)}}/> 
                </View>
            </View> 
            : null}
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Phone'
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        keyboardType={'phone-pad'} 
                        value={Phone1} 
                        onChangeText={(value) => {setPhone1(value)}}/>
                </View>
            </View>
            { hasSpouse ? <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Phone 2' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        keyboardType={'phone-pad'} 
                        value={Phone3} 
                        onChangeText={(value) => {setPhone3(value)}}/>
                </View> 
            </View>
            : null}
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Occupation' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={occ1} 
                        onChangeText={(value) => {setocc1(value)}}/>
                </View>
                { hasSpouse ? <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Spouse Occupation'
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={occ2} 
                        onChangeText={(value) => {setocc2(value)}}/>
                </View>: null}
            </View>
            <TextInput 
                placeholder='Address'
                placeholderTextColor= {PlaceholderTextColor} 
                style={styles.textInputStyle} 
                value={address} 
                onChangeText={(value) => {setaddress(value)}}/>

            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='City' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={city} 
                        onChangeText={(value) => {setcity(value)}}/>
                </View>
                <View style={{flex:0.5}}>
                    <TextInput 
                        placeholder='State' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={state} 
                        onChangeText={(value) => {setstate(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        maxLength={5}
                        placeholder='Zip' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        keyboardType='numeric' 
                        value={zip.toString()} 
                        onChangeText={(value) => {setzip(value)}}/>
                </View>
            </View>
            {isKeyboardVisible ? <View style={{height:260}}/>:null}
        </View>
    )
}

export default Basics