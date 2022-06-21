import React from 'react'
import {  Switch, Text, TextInput, View } from 'react-native'

import { styles, PlaceholderTextColor } from '../styles'

const Medical = ({hasSpouse, hasadv, sethasadv,
            advdduct, setadvdduct,
            spousehasadv, setspousehasadv,
            spouseadvdduct, setspouseadvdduct,
            hco1, sethco1,
            hplan1, sethplan1,
            hprem1, sethprem1,
            rxco1, setrxco1,
            hco2, sethco2,
            hplan2, sethplan2,
            hprem2, sethprem2,
            rxco2, setrxco2,
            concerns, setconcerns,
            changes, setchanges, clientIndex,
            isKeyboardVisible}) => {

    const toggleAdvSwitch = () => sethasadv(previousState => !previousState);
    const toggleSpouseAdvSwitch = () => setspousehasadv(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
             { clientIndex!=null ? <Text style={styles.titleText}>Medical Update</Text>
            : <Text style={styles.titleText}>Medical</Text> }
            <Text style={styles.lableText}>Has Advantage?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasadv ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleAdvSwitch}
                value={hasadv}
                />
            { hasadv ? <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <TextInput placeholder='Company'
                        placeholderTextColor= {PlaceholderTextColor} 
                        style={styles.textInputStyle} 
                        value={hco1} 
                        onChangeText={(value) => {sethco1(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput placeholder='Deductible' 
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        style={styles.textInputStyle} 
                        value={advdduct.toString()} 
                        onChangeText={(value) => {setadvdduct(value)}}/>
                    </View>
                </View>
            </> 
            : <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <TextInput 
                            placeholder='Health Plan' 
                            placeholderTextColor= {PlaceholderTextColor} 
                            style={styles.textInputStyle} 
                            value={hplan1} 
                            onChangeText={(value) => {sethplan1(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput 
                            placeholder='Premium' 
                            placeholderTextColor= {PlaceholderTextColor} 
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={hprem1.toString()} 
                            onChangeText={(value) => {sethprem1(value)}}/>
                    </View>
                </View>
                <TextInput 
                    placeholder='Company' 
                    placeholderTextColor= {PlaceholderTextColor} 
                    style={styles.textInputStyle} 
                    value={hco1} onChangeText={(value) => {sethco1(value)}}/>
                <TextInput 
                    placeholder='Rx Coverage' 
                    placeholderTextColor= {PlaceholderTextColor} 
                    style={styles.textInputStyle} 
                    value={rxco1} onChangeText={(value) => {setrxco1(value)}}/>

         
            </> }
           
            { hasSpouse ? <>
                <Text style={styles.lableText}>Spouse has Advantage Plan?</Text>
                <Switch 
                    style={styles.switch}
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={spousehasadv ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleSpouseAdvSwitch}
                    value={spousehasadv}
                    />
                { spousehasadv ? <> 
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1.4}}>
                            <TextInput 
                                placeholder='Spouse Advantage Co.'
                                placeholderTextColor= {PlaceholderTextColor} 
                                style={styles.textInputStyle} 
                                value={hplan2} 
                                onChangeText={(value) => {sethplan2(value)}}/>
                        </View>
                        <View style={{flex:0.6}}>
                            <TextInput 
                                placeholder='Deductible'
                                placeholderTextColor= {PlaceholderTextColor} 
                                keyboardType='numeric' 
                                style={styles.textInputStyle} 
                                value={spouseadvdduct.toString()} 
                                onChangeText={(value) => {setspouseadvdduct(value)}}/>
                        </View>
                    </View>  
                </> 
                : <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <TextInput 
                            placeholder='Spouse Health Plan'
                            placeholderTextColor= {PlaceholderTextColor} 
                            style={styles.textInputStyle} 
                            value={hplan2} 
                            onChangeText={(value) => {sethplan2(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput 
                            placeholder='Premium'
                            placeholderTextColor= {PlaceholderTextColor} 
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={hprem2.toString()} 
                            onChangeText={(value) => {sethprem2(value)}}/>
                    </View>
                </View>
                <TextInput 
                    placeholder='Spouse Company'
                    placeholderTextColor= {PlaceholderTextColor} 
                    style={styles.textInputStyle} 
                    value={hco2} 
                    onChangeText={(value) => {sethco2(value)}}/> 
                <TextInput 
                    placeholder='Spouse Rx Coverage'
                    placeholderTextColor= {PlaceholderTextColor} 
                    style={styles.textInputStyle} 
                    value={rxco2} 
                    onChangeText={(value) => {setrxco2(value)}}/>
                </>}
            </>: null }
            <Text style={styles.lableText}>What are your concerns about gaps in Medicare?</Text>
            <TextInput 
                multiline
                style={styles.responseInputStyle} 
                value={concerns} 
                onChangeText={(value) => {setconcerns(value)}}/>
            <Text style={styles.lableText}>What would you change about your health care?</Text>
            <TextInput 
                multiline
                style={styles.responseInputStyle} 
                value={changes} 
                onChangeText={(value) => {setchanges(value)}}/>
            {isKeyboardVisible ? <View style={{height:260}}/>:null}
        </View>
    )
}

export default Medical