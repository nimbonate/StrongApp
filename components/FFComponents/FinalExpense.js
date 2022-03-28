import React from 'react'
import { Switch, Text, TextInput, View } from 'react-native'

import { styles } from '../styles'

const FinalExpense = ({hasSpouse,
        haslife, sethaslife,
        spousehaslife, setspousehaslife,
        lifeco1, setlifeco1,
        lifeben1, setlifeben1,
        lifeface1, setlifeface1,
        lifeprem1, setlifeprem1,
        lifeco2, setlifeco2,
        lifeben2, setlifeben2,
        lifeface2, setlifeface2,
        lifeprem2, setlifeprem2,
        lifeplans, setlifeplans,
        haswilltrust, sethaswilltrust,
        trustrev, settrustrev,
        hasprop, sethasprop,
        hasmulti, sethasmulti,
        hasblended, sethasblended,
        hasautos, sethasautos,
        hascash, sethascash, clientIndex,
        isKeyboardVisible}) => {
    
    const toggleLifeSwitch = () => sethaslife(previousState => !previousState);
    const toggleSpouseLifeSwitch = () => setspousehaslife(previousState => !previousState);
    const toggleWillSwitch = () => sethaswilltrust(previousState => !previousState);
    const togglePropSwitch = () => sethasprop(previousState => !previousState);
    const toggleMultiSwitch = () => sethasmulti(previousState => !previousState);
    const toggleBlendedSwitch = () => sethasblended(previousState => !previousState);
    const toggleAutosSwitch = () => sethasautos(previousState => !previousState);
    const toggleCashSwitch = () => sethascash(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            { clientIndex!=null ? <Text style={styles.titleText}>Final Expense Update</Text>
            : <Text style={styles.titleText}>Final Expense</Text> }
            <Text style={styles.lableText}>Has Life Insurance?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={haslife ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleLifeSwitch}
                value={haslife}
            />
            { haslife ? <>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Company' 
                            style={styles.textInputStyle} 
                            value={lifeco1} 
                            onChangeText={(value) => {setlifeco1(value)}}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Beneficiary' 
                            style={styles.textInputStyle} 
                            value={lifeben1} 
                            onChangeText={(value) => {setlifeben1(value)}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Face Amount'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={lifeface1.toString()} 
                            onChangeText={(value) => {setlifeface1(value)}}/>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput 
                            placeholder='Premium'
                            keyboardType='numeric' 
                            style={styles.textInputStyle} 
                            value={lifeprem1.toString()} 
                            onChangeText={(value) => {setlifeprem1(value)}}/>
                    </View>
                </View>
            </>: null}
            { hasSpouse ? <>
                <Text style={styles.lableText}>Spouse Has Life Insurance?</Text>
                <Switch 
                    style={styles.switch}
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={spousehaslife ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleSpouseLifeSwitch}
                    value={spousehaslife}
                />
                { spousehaslife ? <>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                placeholder='Spouse Company'
                                style={styles.textInputStyle} 
                                value={lifeco2} 
                                onChangeText={(value) => {setlifeco2(value)}}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput 
                                placeholder='Beneficiary'
                                style={styles.textInputStyle} 
                                value={lifeben2} 
                                onChangeText={(value) => {setlifeben2(value)}}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TextInput 
                                placeholder='Face Amount'
                                keyboardType='numeric' 
                                style={styles.textInputStyle} 
                                value={lifeface2.toString()} 
                                onChangeText={(value) => {setlifeface2(value)}}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput 
                                placeholder='Premium'
                                keyboardType='numeric' 
                                style={styles.textInputStyle} 
                                value={lifeprem2.toString()} 
                                onChangeText={(value) => {setlifeprem2(value)}}/>
                        </View>
                    </View> 
                </>
                : null }
            </> : null}
            {haslife || spousehaslife ? <>
                <Text style={styles.lableText}>What are your plans for your life insurance?</Text>
                <TextInput 
                    multiline
                    style={styles.responseInputStyle}
                    value={lifeplans} 
                    onChangeText={(value) => {setlifeplans(value)}}/>
            </> : <>
                <Text style={styles.lableText}>What are your plans for Final Expenses?</Text>
                <TextInput 
                    multiline
                    style={styles.responseInputStyle} 
                    value={lifeplans} 
                    onChangeText={(value) => {setlifeplans(value)}}/>
            </>}
            <Text style={styles.lableText}>Do you have a Will or Trust?</Text>
            <Switch 
                style={styles.switch}
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={haswilltrust ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleWillSwitch}
                value={haswilltrust}
            />
            { haswilltrust ? <>
                <Text style={styles.lableText}>When was it last reviewed?</Text>
                <TextInput style={styles.textInputStyle} value={trustrev} onChangeText={(value) => {settrustrev(value)}}/>
            </> : null }
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Do you own property?</Text>
                </View>
                {hasprop ? <View style={{flex:.5}}>
                    <Text style={styles.lableText}>Mutliple?</Text>
                </View> : null }
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Switch 
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={hasprop ? '#228B22' : '#f4f3f4'}
                    onValueChange={togglePropSwitch}
                    value={hasprop}
                    />
                </View>
                { hasprop ? <View style={{flex:.5}}>
                    <Switch 
                    trackColor={{ false:'#767577', true:'#81b0ff' }}
                    thumbColor={hasmulti ? '#228B22' : '#f4f3f4'}
                    onValueChange={toggleMultiSwitch}
                    value={hasmulti}
                    />
                </View> : null }
            </View>
            <Text style={styles.lableText}>Do you have a blended family?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasblended ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleBlendedSwitch}
                value={hasblended}
                /> 
            <Text style={styles.lableText}>Do you own any vehicles?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hasautos ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleAutosSwitch}
                value={hasautos}
                /> 
            <Text style={styles.lableText}>Do you keep a $5,000 emergency fund?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={hascash ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleCashSwitch}
                value={hascash}
                /> 
                 {isKeyboardVisible ? <View style={{height:60}}/>:null}
        </View>
    )
}

export default FinalExpense