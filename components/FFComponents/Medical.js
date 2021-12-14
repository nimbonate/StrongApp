import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Medical = ({hasspouse, hasadv, sethasadv,
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
            changes, setchanges}) => {

    const toggleAdvSwitch = () => sethasadv(previousState => !previousState);
    const toggleSpouseAdvSwitch = () => setspousehasadv(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Medical</Text>
            <Text style={styles.lableText}>Has Advantage?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasadv ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleAdvSwitch}
                value={hasadv}
                />
            { hasadv ? <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <Text style={styles.lableText}>Company</Text>
                    </View>
                    <View style={{flex:0.6}}>
                        <Text style={styles.lableText}>Deductible</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                    <TextInput style={styles.textInputStyle} value={hco1} onChangeText={(value) => {sethco1(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={advdduct.toString()} onChangeText={(value) => {setadvdduct(value)}}/>
                    </View>
                </View>
            </> 
            : <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <Text style={styles.lableText}>Health Plan</Text>
                    </View>
                    <View style={{flex:0.6}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                    <TextInput style={styles.textInputStyle} value={hplan1} onChangeText={(value) => {sethplan1(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={hprem1.toString()} onChangeText={(value) => {sethprem1(value)}}/>
                    </View>
                </View>
                <Text style={styles.lableText}>Company</Text>
                <TextInput style={styles.textInputStyle} value={hco1} onChangeText={(value) => {sethco1(value)}}/>
                <Text style={styles.lableText}>Rx Coverage</Text>
                <TextInput style={styles.textInputStyle} value={rxco1} onChangeText={(value) => {setrxco1(value)}}/>


         
            </> }
           
            { hasspouse ? <>
                <Text style={styles.lableText}>Spouse has Advantage Plan?</Text>
                <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={spousehasadv ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleSpouseAdvSwitch}
                value={spousehasadv}
                />
                { spousehasadv ? <> 
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1.4}}>
                            <Text style={styles.lableText}>Spouse Advantage Company</Text>
                        </View>
                        <View style={{flex:0.6}}>
                            <Text style={styles.lableText}>Spouse Deduct</Text>
                        </View>
                    </View>  
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1.4}}>
                            <TextInput style={styles.textInputStyle} value={hplan2} onChangeText={(value) => {sethplan2(value)}}/>
                        </View>
                        <View style={{flex:0.6}}>
                            <TextInput keyboardType='numeric' style={styles.textInputStyle} value={spouseadvdduct.toString()} onChangeText={(value) => {setspouseadvdduct(value)}}/>
                        </View>
                    </View>  
                </> 
                : <>
                     <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                        <Text style={styles.lableText}>Spouse Health Plan</Text>
                    </View>
                    <View style={{flex:0.6}}>
                        <Text style={styles.lableText}>Spouse Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.4}}>
                    <TextInput style={styles.textInputStyle} value={hplan2} onChangeText={(value) => {sethplan2(value)}}/>
                    </View>
                    <View style={{flex:0.6}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={hprem2.toString()} onChangeText={(value) => {sethprem2(value)}}/>
                    </View>
                </View>
                    <Text style={styles.lableText}>Spouse Company</Text> 
                    <TextInput style={styles.textInputStyle} value={hco2} onChangeText={(value) => {sethco2(value)}}/> 
                    <Text style={styles.lableText}>Spouse Rx Coverage</Text>
                    <TextInput style={styles.textInputStyle} value={rxco2} onChangeText={(value) => {setrxco2(value)}}/>
                </>}
            </>: null }
            <Text style={styles.lableText}>What are your concerns about gaps in Medicare?</Text>
            <TextInput style={styles.responseInputStyle} value={concerns} onChangeText={(value) => {setconcerns(value)}}/>
            <Text style={styles.lableText}>What would you change about your health care?</Text>
            <TextInput style={styles.responseInputStyle} value={changes} onChangeText={(value) => {setchanges(value)}}/>
        </View>
    )
}

export default Medical

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
