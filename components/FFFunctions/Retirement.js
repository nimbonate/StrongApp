import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Retirement = ({hasspouse,
                ssfeel, setssfeel,
                monthlyss, setmonthlyss,
                monthlypen, setmonthlypen,
                monthlyexp, setmonthlyexp,
                cansave, setcansave,
                savings, setsavings,
                realestate, setrealestate,
                mutuals, setmutuals,
                licash, setlicash,
                annuities, setannuities,
                stocks, setstocks,
                bonds, setbonds,
                moneymkts, setmoneymkts,
                cds, setcds,
                iras, setiras,
                forohwonk, setforohwonk,
                other, setother,
                whythese, setwhythese,
                goodreturns, setgoodreturns,
                motivation, setmotivation,
                incomeconcerns, setincomeconcerns}) => {

    const toggleSaveSwitch = () => setcansave(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Retirement</Text>
            <Text style={styles.lableText}>How do you feel about your SS payment?</Text>
            <TextInput style={styles.responseInputStyle} value={ssfeel} onChangeText={(value) => {setssfeel(value)}}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                <Text style={styles.lableText}>SS Montyhly Income</Text>
                </View>
                <View style={{flex:1}}>
                <Text style={styles.lableText}>Monthly Expenses</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={monthlyss.toString()} onChangeText={(value) => {setmonthlyss(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={monthlyexp.toString()} onChangeText={(value) => {setmonthlyexp(value)}}/>
                </View>
            </View>
            <Text style={styles.lableText}>Are you able to save money with your SS income?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={cansave ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleSaveSwitch}
                value={cansave}
            />
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Savings</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Real Estate</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={savings.toString()} onChangeText={(value) => {setsavings(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={realestate.toString()} onChangeText={(value) => {setrealestate(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Mutual Funds</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Life Insurance Cash Value</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={mutuals.toString()} onChangeText={(value) => {setmutuals(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={licash.toString()} onChangeText={(value) => {setlicash(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Annuities</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Stocks</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={annuities.toString()} onChangeText={(value) => {setannuities(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={stocks.toString()} onChangeText={(value) => {setstocks(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Bonds</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}> Money Market Accts.</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={bonds.toString()} onChangeText={(value) => {setbonds(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={moneymkts.toString()} onChangeText={(value) => {setmoneymkts(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>CDs</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>IRAs</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={cds.toString()} onChangeText={(value) => {setcds(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={iras.toString()} onChangeText={(value) => {setiras(value)}}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>401K</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.lableText}>Other</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={forohwonk.toString()} onChangeText={(value) => {setforohwonk(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.textInputStyle} value={other.toString()} onChangeText={(value) => {setother(value)}}/>
                </View>
            </View>
        </View>
    )
}

export default Retirement

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
