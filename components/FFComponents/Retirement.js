import React from 'react'
import { Switch, Text, TextInput, View } from 'react-native'

import { styles, PlaceholderTextColor } from '../styles'

const Retirement = ({hasSpouse,
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
                incomeconcerns, setincomeconcerns,
                isKeyboardVisible}) => {

    const toggleSaveSwitch = () => setcansave(previousState => !previousState);

    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Retirement</Text>
            <Text style={styles.lableText}>How do you feel about your SS payment?</Text>
            <TextInput 
                multiline
                style={styles.responseInputStyle} 
                value={ssfeel} 
                onChangeText={(value) => {setssfeel(value)}}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='SS Monthly Income'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={monthlyss.toString()} 
                        onChangeText={(value) => {setmonthlyss(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Monthly Expenses'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={monthlyexp.toString()} 
                        onChangeText={(value) => {setmonthlyexp(value)}}/>
                </View>
            </View>
            <Text style={styles.lableText}>Are you able to save money with your SS income?</Text>
            <Switch 
                trackColor={{ false:'#767577', true:'#81b0ff' }}
                thumbColor={cansave ? '#228B22' : '#f4f3f4'}
                onValueChange={toggleSaveSwitch}
                value={cansave}
            />
            <Text style={styles.headingText}>Regarding Your Assetts...</Text>
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
                    <TextInput 
                        placeholder='Savings'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={savings.toString()} 
                        onChangeText={(value) => {setsavings(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Real Estate'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={realestate.toString()} 
                        onChangeText={(value) => {setrealestate(value)}}/>
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
                    <TextInput 
                        placeholder='Mutual Funds'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={mutuals.toString()} 
                        onChangeText={(value) => {setmutuals(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Life Insurance Cash'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={licash.toString()} 
                        onChangeText={(value) => {setlicash(value)}}/>
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
                    <TextInput 
                        placeholder='Annuities'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={annuities.toString()} 
                        onChangeText={(value) => {setannuities(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Stocks'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={stocks.toString()} 
                        onChangeText={(value) => {setstocks(value)}}/>
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
                    <TextInput 
                        placeholder='Bonds'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={bonds.toString()} 
                        onChangeText={(value) => {setbonds(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Money Markets'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={moneymkts.toString()} 
                        onChangeText={(value) => {setmoneymkts(value)}}/>
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
                    <TextInput 
                        placeholder='CDs'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={cds.toString()} 
                        onChangeText={(value) => {setcds(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='IRAs'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={iras.toString()} 
                        onChangeText={(value) => {setiras(value)}}/>
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
                    <TextInput 
                        placeholder='401k'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={forohwonk.toString()} 
                        onChangeText={(value) => {setforohwonk(value)}}/>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder='Other'
                        placeholderTextColor= {PlaceholderTextColor} 
                        keyboardType='numeric' 
                        maxLength={10} 
                        style={styles.textInputStyle} 
                        value={other.toString()} 
                        onChangeText={(value) => {setother(value)}}/>
                </View>
            </View>
            {isKeyboardVisible ? <View style={{height:200}}/>:null}
        </View>
    )
}

export default Retirement
