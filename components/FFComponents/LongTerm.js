import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const LongTerm = ({hasspouse,
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
        burdenconcerns, setburdenconcerns}) => {

    const toggleLtcSwitch = () => sethasltc(previousState => !previousState);
    const toggleKnowSwitch = () => setknow(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Long-Term Care</Text>
            { hasspouse ? <Text style={styles.lableText}>Do you have Extended Care Policies?</Text>
             : <Text style={styles.lableText}>Do you have an Extended Care Policy?</Text>}
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasltc ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleLtcSwitch}
                value={hasltc}
            />
            { hasltc ? <>
                <Text style={styles.lableText}>Extended Care Beneftis</Text>
                <TextInput style={styles.textInputStyle} value={ecareben1} onChangeText={(value) => {setecareben1(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Extended Care Company</Text>
                    </View>
                    <View style={{flex:.5}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={ecareco1} onChangeText={(value) => {setecareco1(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={ecareprem1.toString()} onChangeText={(value) => {setecareprem1(value)}}/>
                    </View>
                </View>
                {hasspouse ? <> 
                <Text style={styles.lableText}>Spouse Extended Care Benefits</Text>
                <TextInput style={styles.textInputStyle} value={ecareben2} onChangeText={(value) => {setecareben2(value)}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={styles.lableText}>Spouse Extended Care Company</Text>
                    </View>
                    <View style={{flex:.5}}>
                        <Text style={styles.lableText}>Premium</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput style={styles.textInputStyle} value={ecareco2} onChangeText={(value) => {setecareco2(value)}}/>
                    </View>
                    <View style={{flex:.5}}>
                        <TextInput keyboardType='numeric' style={styles.textInputStyle} value={ecareprem2.toString()} onChangeText={(value) => {setecareprem2(value)}}/>
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
                <TextInput style={styles.responseInputStyle} value={nhaffect} onChangeText={(value) => {setnhaffect(value)}}/>
            </> : null}
            <Text style={styles.lableText}>Nursing Home Concerns?</Text>
            <TextInput style={styles.responseInputStyle} value={nhconcerns} onChangeText={(value) => {setnhconcerns(value)}}/>
            <Text style={styles.lableText}>Burdening Children Concerns?</Text>
            <TextInput style={styles.responseInputStyle} value={burdenconcerns} onChangeText={(value) => {setburdenconcerns(value)}}/>             
        </View>
    )
}

export default LongTerm

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
