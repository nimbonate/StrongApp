import React from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'

const Review = ({hasspouse,
            fname1, lname1,
            fname2, lname2,
            homephone, cell1,
            cell2, occ1,
            occ2, address,
            city, state, zip, 
            hco1, hplan1, hprem1, rxco1,
            hco2, hplan2, hprem2, rxco2,
            concerns, changes,
            hasltc, ecareben1,ecareco1, ecareprem1,
            ecareben2, ecareco2, ecareprem2,
            know, nhaffect, nhconcerns, burdenconcerns,
            hascanpol, canpolco1, canpolprem1, canpolcash1,
            canpolco2, canpolprem2, canpolcash2,
            cancosts, hasdental,
            dentalco1, dentalprem1, dentalco2, dentalprem2,
            hasadv, hicopay1, hicopay2, hibind, hiplans,
            haslife, lifeco1, lifeco2, lifeben1, lifeben2,
            lifeface1, lifeface2, lifeprem1, lifeprem2,
            lifeplans, haswilltrust, trustrev,
            hasprop, hasmulti, hasblended, hasautos, hascash,
            ssfeel, monthlyss, monthlypen, monthlyexp, cansave,
            savings, realestate, mutuals, licash, annuities,
            stocks, bonds, moneymkts, cds, iras, forohwonk, other,
            whythese, goodreturns, motivation, incomeconcerns}) => {


    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Review</Text>
            <Text style={styles.headerText}>Basics</Text>
            { hasspouse ?<>
            <Text style={styles.lableText}>Name: {fname1} {lname1}</Text>
            <Text style={styles.lableText}>Spouse Name: {fname2} {lname2} live together at</Text>
            </>
            : <Text style={styles.lableText}>Name: {fname1} {lname1}</Text>}
            <Text style={styles.lableText}>Address: {address}, {city} {state}</Text>
            { homephone ? <Text style={styles.lableText}>Home Phone: {homephone} </Text> 
            : null }
            { cell1 ? <Text style={styles.lableText}>Cell Phone: {cell1} </Text> 
            : null }
            { cell2 ? <Text style={styles.lableText}>Spouse Cell Phone: {cell2} </Text> 
            : null }
            <Text style={styles.headerText}>Medical</Text>
            { hplan1 ? <Text style={styles.lableText}>Health Plan: {hplan1} with {hco1} for {hprem1}/Month</Text>
            : null}
            { rxco1 ? <Text style={styles.lableText}>Rx Coverage: {rxco1}</Text>: null}
            { hasspouse ?<>
                { hplan2 ? <Text style={styles.lableText}>Spouse Health Plan: {hplan2} with {hco2} for {hprem2}/Month</Text> 
                    : null }
                { rxco2 ? <Text style={styles.lableText}>Spouse Rx Coverage: {rxco2}</Text>: null}
            </>: null}
            <Text style={styles.headerText}>Long Term Care</Text>
            { hasltc ? <Text style={styles.lableText}>Extended Care Company: {ecareco1} for {ecareprem1}</Text> 
            : <Text style={styles.lableText}>Has No Long Term Care.</Text>}
            { hasspouse ? <>
                { hasltc ? <Text style={styles.lableText}>Extended Care Company: {ecareco1} for {ecareprem1}</Text> 
                    : null}
            </> : null }
            <Text style={styles.headerText}>Auxilliary Insurance</Text>
            { hascanpol ? <Text style={styles.lableText}>Cancer Policy: {canpolco1} for {canpolprem1}/Month </Text> 
            : <Text style={styles.lableText}>Has No Cancer Policy.</Text>}

        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 20
    },
    headerText: {
        fontSize: 15,
        paddingBottom: 5
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
