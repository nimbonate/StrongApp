import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Auxiliary = ({hasspouse,
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
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hascanpol ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleCanSwitch}
                value={hascanpol}
            />
            { hascanpol ? <>
                <Text style={styles.lableText}>Cancer Policy Company</Text>
                <TextInput style={styles.textInputStyle} value={canpolco1} onChangeText={(value) => {setcanpolco1(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Cancer Policy Cash Payout</Text>
                    </View>
                    <View style={{flex:.5}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={canpolcash1.toString()} onChangeText={(value) => {setcanpolcash1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={canpolprem1.toString()} onChangeText={(value) => {setcanpolprem1(value)}}/>
                    </View>
                </View>
                { hasspouse ?<>
                <Text style={styles.lableText}>Spouse Cancer Policy Company</Text>
                <TextInput style={styles.textInputStyle} value={canpolco2} onChangeText={(value) => {setcanpolco2(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Spouse Cancer Cash Payout</Text>
                    </View>
                    <View style={{flex:.5}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={canpolcash2.toString()} onChangeText={(value) => {setcanpolcash2(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={canpolprem2.toString()} onChangeText={(value) => {setcanpolprem2(value)}}/>
                    </View>
                </View>
                </> : null }
            </> : null } 
            { hascanpol ? null : <>
                <Text>How will you pay for Cancer Expenses?</Text>
                <TextInput style={styles.responseInputStyle} value={cancosts} onChangeText={(value) => {setcancosts(value)}}/>
            </>}
            <Text style={styles.lableText}>Has Dental/Vision?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasdental ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleDentSwitch}
                value={hasdental}
            />
            {hasdental ?<>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Dental/Vision Company</Text>
                    </View>
                    <View style={{flex:.5}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={dentalco1} onChangeText={(value) => {setdentalco1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={dentalprem1.toString()} onChangeText={(value) => {setdentalprem1(value)}}/>
                    </View>
                </View>
                { hasspouse ?<>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.lableText}>Spouse Dental/Vision Company</Text>
                        </View>
                        <View style={{flex:.5}}>
                            <Text style={styles.lableText}>Premium</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput style={styles.textInputStyle} value={dentalco2} onChangeText={(value) => {setdentalco2(value)}}/>
                        </View>
                        <View style={{flex:.5}}>
                            <TextInput keyboardType='numeric' style={styles.textInputStyle} value={dentalprem2.toString()} onChangeText={(value) => {setdentalprem2(value)}}/>
                        </View>
                    </View>
                </> : null}
            </>: null}
            
            { hasadv || spousehasadv ? <>
                <Text style={styles.lableText, {fontSize: 16, marginVertical: 10}}>Regarding Your Advantage Plan...</Text>
                { hasadv ? <>
                    <Text style={styles.lableText}>Hospital Indemnity Copay</Text>
                    <TextInput keyboardType='numeric' style={styles.textInputStyle} value={hicopay1.toString()} onChangeText={(value) => sethicopay1(value)}/>
                </> : null}
                { hasspouse ? <>
                    { spousehasadv ? <>
                        <Text style={styles.lableText}>Spouse Hospital Copay</Text>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={hicopay2.toString()} onChangeText={(value) => sethicopay2(value)}/>
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
                <TextInput style={styles.responseInputStyle} value={hiplans} onChangeText={(value) => {sethiplans(value)}}/>
            </> : null }
            {isKeyboardVisible ? <View style={{height:260}}/>:null}
        </View>
    )
}

export default Auxiliary

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
