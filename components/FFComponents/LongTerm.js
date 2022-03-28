import React from 'react'
import { Switch, Text, TextInput, View } from 'react-native'

import { styles } from '../styles'

const LongTerm = ({hasSpouse,
        hasltc, sethasltc,
        ecareben1, setecareben1,
        ecareco1, setecareco1,
        ecareprem1, setecareprem1,
        ecareben2, setecareben2,
        ecareco2, setecareco2,
        ecareprem2, setecareprem2,
        know, setknow,
        nhaffect, setnhaffect,
        nhconcerns, setnhconcerns,
        burdenconcerns, setburdenconcerns, clientIndex,
        isKeyboardVisible}) => {

    const toggleLtcSwitch = () => sethasltc(previousState => !previousState);
    const toggleKnowSwitch = () => setknow(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            { clientIndex !=null ? <Text style={styles.titleText}>Long-Term Care Update</Text>
            : <Text style={styles.titleText}>Long-Term Care</Text> }
            { hasSpouse ? <Text style={styles.lableText}>Do you have Extended Care Policies?</Text>
             : <Text style={styles.lableText}>Do you have an Extended Care Policy?</Text>}
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasltc ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleLtcSwitch}
                value={hasltc}
            />
            <View style={{height:20}}/>
            { hasltc ? <>
                <TextInput 
                    placeholder='Extended Care Benefits'
                    style={styles.textInputStyle} 
                    value={ecareben1} 
                    onChangeText={(value) => {setecareben1(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Extended Care Co.'
                            style={styles.textInputStyle} 
                            value={ecareco1} 
                            onChangeText={(value) => {setecareco1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={ecareprem1.toString()} 
                            onChangeText={(value) => {setecareprem1(value)}}/>
                    </View>
                </View>
                {hasSpouse ? <> 
                <TextInput 
                    placeholder='Spouse Extended Care Benefits'
                    style={styles.textInputStyle} 
                    value={ecareben2} 
                    onChangeText={(value) => {setecareben2(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Spouse Extended Care Co.'
                            style={styles.textInputStyle} 
                            value={ecareco2} 
                            onChangeText={(value) => {setecareco2(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={ecareprem2.toString()} 
                            onChangeText={(value) => {setecareprem2(value)}}/>
                    </View>
                </View>
                </>: null}
            </> : null}
            <Text style={styles.lableText}>Do you know anyone in a LTC situation?</Text>
            <Switch 
            trackColor={{ false:'#767577', true:'#81b0ff' }}
            thumbColor={know ? '#228B22' : '#f4f3f4'}
            onValueChange={toggleKnowSwitch}
            value={know}
            />
            { know ? <>
                <Text style={styles.lableText}>How has a nursing home affected them?</Text>
                <TextInput 
                    multiline
                    style={styles.responseInputStyle} 
                    value={nhaffect} 
                    onChangeText={(value) => {setnhaffect(value)}}/>
            </> : null}
            <Text style={styles.lableText}>Nursing Home Concerns?</Text>
            <TextInput 
                multiline
                style={styles.responseInputStyle} 
                value={nhconcerns} 
                onChangeText={(value) => {setnhconcerns(value)}}/>
            <Text style={styles.lableText}>Burdening Children Concerns?</Text>
            <TextInput 
                multiline
                style={styles.responseInputStyle} 
                value={burdenconcerns} 
                onChangeText={(value) => {setburdenconcerns(value)}}/>     
            {isKeyboardVisible ? <View style={{height:260}}/>:null}        
        </View>
    )
}

export default LongTerm

