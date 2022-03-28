import React from 'react'
import { Switch, Text, TextInput, View } from 'react-native'

import { styles } from '../styles'

const Auxiliary = ({hasSpouse,
            hascanpol, sethascanpol,
            canpolco1, setcanpolco1,
            canpolprem1, setcanpolprem1,
            canpolcash1, setcanpolcash1,
            canpolco2, setcanpolco2,
            canpolprem2, setcanpolprem2,
            canpolcash2, setcanpolcash2,
            cancosts, setcancosts,
            hasdental, sethasdental,
            dentalco1, setdentalco1,
            dentalprem1, setdentalprem1,
            dentalco2, setdentalco2,
            dentalprem2, setdentalprem2,
            hasadv, spousehasadv,
            hicopay1, sethicopay1,
            hicopay2, sethicopay2,
            hibind, sethibind,
            hiplans, sethiplans,
            isKeyboardVisible}) => {

    const toggleCanSwitch = () => sethascanpol(previousState => !previousState);
    const toggleDentSwitch = () => sethasdental(previousState => !previousState);
    const toggleBindSwitch = () => sethibind(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Auxiliary</Text>
            <Text style={styles.lableText}>Has Cancer Policy?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hascanpol ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleCanSwitch}
                value={hascanpol}
            />
            { hascanpol ? <>
                <TextInput 
                    placeholder='Cancer Policy Company'
                    style={styles.textInputStyle} 
                    value={canpolco1} 
                    onChangeText={(value) => {setcanpolco1(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Cash Payout'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={canpolcash1.toString()} 
                            onChangeText={(value) => {setcanpolcash1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={canpolprem1.toString()} 
                            onChangeText={(value) => {setcanpolprem1(value)}}/>
                    </View>
                </View>
                { hasSpouse ?<>
                <TextInput 
                    placeholder='Spouse Cancer Policy Co.'
                    style={styles.textInputStyle} 
                    value={canpolco2} 
                    onChangeText={(value) => {setcanpolco2(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Spouse Cash Payout'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={canpolcash2.toString()} 
                            onChangeText={(value) => {setcanpolcash2(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={canpolprem2.toString()} 
                            onChangeText={(value) => {setcanpolprem2(value)}}/>
                    </View>
                </View>
                </> : null }
            </> : null } 
            { hascanpol ? null : <>
                <Text>How will you pay for Cancer Expenses?</Text>
                <TextInput 
                    multiline
                    style={styles.responseInputStyle} 
                    value={cancosts} 
                    onChangeText={(value) => {setcancosts(value)}}/>
            </>}
            <Text style={styles.lableText}>Has Dental/Vision?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasdental ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleDentSwitch}
                value={hasdental}
            />
            {hasdental ?<>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Dental/Vision Co.'
                            style={styles.textInputStyle} 
                            value={dentalco1} 
                            onChangeText={(value) => {setdentalco1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={dentalprem1.toString()} 
                            onChangeText={(value) => {setdentalprem1(value)}}/>
                    </View>
                </View>
                { hasSpouse ?<>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                placeholder='Spouse Dental/Vision Co.'
                                style={styles.textInputStyle} 
                                value={dentalco2} 
                                onChangeText={(value) => {setdentalco2(value)}}/>
                        </View>
                        <View style={{flex:.5}}>
                            <TextInput 
                                placeholder='Premium'
                                keyboardType='numeric' 
                                style={styles.textInputStyle} 
                                value={dentalprem2.toString()} 
                                onChangeText={(value) => {setdentalprem2(value)}}/>
                        </View>
                    </View>
                </> : null}
            </>: null}
            
            { hasadv || spousehasadv ? <>
                <Text style={styles.headingText}>Regarding Your Advantage Plan...</Text>
                { hasadv ? <>
                    <TextInput 
                        placeholder='Hospital Copay'
                        keyboardType='numeric' 
                        style={styles.textInputStyle} 
                        value={hicopay1.toString()} 
                        onChangeText={(value) => sethicopay1(value)}/>
                </> : null}
                { hasSpouse ? <>
                    { spousehasadv ? <>
                        <TextInput 
                            placeholder='Spouse Hospital Copay'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={hicopay2.toString()} 
                            onChangeText={(value) => sethicopay2(value)}/>
                    </> : null }
                </> : null}
                <View/>
                <Text style={styles.lableText}>Would paying your copay put you in a bind?</Text>
                <Switch 
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={hibind ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleBindSwitch}
                    value={hibind}
                    />
                <Text style={styles.lableText}>What are your plans for paying your copay?</Text>
                <TextInput 
                    multiline
                    style={styles.responseInputStyle} 
                    value={hiplans} 
                    onChangeText={(value) => {sethiplans(value)}}/>
            </> : null }
            {isKeyboardVisible ? <View style={{height:260}}/>:null}
        </View>
    )
}

export default Auxiliary