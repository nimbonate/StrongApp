import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Review = ({hasspouse, reffname1, refphone1, clisig,
            fname1, lname1,
            fname2, lname2,
            homephone, cell1,
            cell2, occ1,
            occ2, address,
            city, state, zip, 
            hco1, hplan1, hprem1, rxco1,
            hco2, hplan2, hprem2, rxco2,
            advdduct1, advdduct2,
            concerns, changes,
            hasltc, ecareben1,ecareco1, ecareprem1,
            ecareben2, ecareco2, ecareprem2,
            know, nhaffect, nhconcerns, burdenconcerns,
            hascanpol, canpolco1, canpolprem1, canpolcash1,
            canpolco2, canpolprem2, canpolcash2,
            cancosts, hasdental,
            dentalco1, dentalprem1, dentalco2, dentalprem2,
            hasadv, spousehasadv, hicopay1, hicopay2, hibind, hiplans,
            haslife, spousehaslife, lifeco1, lifeco2, lifeben1, lifeben2,
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
                { fname1 ? <Text style={styles.lableText}>Name: {fname1} {lname1}</Text> 
                : <Text style={styles.lableTextAlert}>Name: None Entered</Text>}
                { fname2 ? <Text style={styles.lableText}>Spouse Name: {fname2} {lname2}</Text> 
                : <Text style={styles.lableTextAlert}>Spouse Name: None Entered</Text>}
                </>
            : <> 
                { fname1 ? <>
                    <Text style={styles.lableText}>Name: {fname1} {lname1}</Text>
                </> : <> 
                    <Text style={styles.lableTextAlert}>Name: None Entered</Text>
                </>}
            </>}
            { address ? <>
                <Text style={styles.lableText}>Address: {address}</Text>
                <Text style={styles.lableText}>{city}, {state} {zip}</Text>
            </> : <Text style={styles.lableTextAlert}>No Address Entered</Text>}
            { homephone ? <Text style={styles.lableText}>Home Phone: {homephone} </Text> 
            : null }
            { cell1 ? <Text style={styles.lableText}>Cell Phone: {cell1} </Text> 
            : null }
            { cell2 ? <Text style={styles.lableText}>Spouse Cell Phone: {cell2} </Text> 
            : null }
            {!homephone + !cell1 + !cell2 ? <Text style={styles.lableTextAlert}>No Phone Entered</Text>
            : null}


            <Text style={styles.headerText}>Medical</Text>
            { hasadv ? <>
                <Text style={styles.lableText}>Advantage Company: {hco1}</Text>
                <Text style={styles.lableText}>Hospital Copay: {hicopay1}</Text>
            </> 
            :<>
                { hplan1 ? <Text style={styles.lableText}>Health Plan: {hplan1} with {hco1} for {hprem1}/Month</Text>
                : <Text style={styles.lableTextAlert}>Health Plan: None Entered</Text>}
                { rxco1 ? <Text style={styles.lableText}>Rx Coverage: {rxco1}</Text>
                :<Text style={styles.lableTextAlert}>Rx Coverage: None Entered</Text>}
            </>}
            { hasspouse ?<>
                { spousehasadv ?<>
                    <Text style={styles.lableText}>Spouse Advantage Company: {hco2}</Text>
                    <Text style={styles.lableText}>Spouse Hospital Copay: {hicopay2}</Text>
                </>
                :<>
                    { hplan2 ? <Text style={styles.lableText}>Spouse Health Plan: {hplan2} with {hco2} for {hprem2}/Month</Text> 
                    : <Text style={styles.lableTextAlert}>Health Plan: None Entered</Text>}
                    { rxco2 ? <Text style={styles.lableText}>Spouse Rx Coverage: {rxco2}</Text>
                    : <Text style={styles.lableTextAlert}>Rx Coverage: None Entered</Text>}
                </>}
            </>: null}


            <Text style={styles.headerText}>Long Term Care</Text>
            { hasltc ? <>
                { ecareco1 ? <Text style={styles.lableText}>Extended Care Company: {ecareco1} for {ecareprem1}</Text>
                    : <Text style={styles.lableTextAlert}>Extended Care Company: None Entered</Text> } 
            </>
            :<> 
                <Text style={styles.lableTextAlert}>Has No Long Term Care.</Text>
            </>}
            { hasspouse ? <>
                { hasltc ? <>
                    { ecareco2 ? <Text style={styles.lableText}>Extended Care Company: {ecareco2} for {ecareprem2}</Text>
                    : <Text style={styles.lableTextAlert}>Extended Care Company: None Entered</Text> }
                </>    
                : null}
            </> : null }


            <Text style={styles.headerText}>Auxilliary Insurance</Text>
            { hascanpol ? <> 
                { canpolco1 ? <Text style={styles.lableText}>Cancer Policy: {canpolco1} for {canpolprem1}/Month </Text> 
                : <Text style={styles.lableTextAlert}>Cancer Policy: None Entered</Text>}
            </>
            : <Text style={styles.lableTextAlert}>Has No Cancer Policy.</Text>}
            { hasdental ? <>
                { dentalco1 ? <Text style={styles.lableText}>Dental Policy: {dentalco1} for {dentalprem1}/Month </Text> 
                : <Text style={styles.lableTextAlert}>Dental Policy: None Entered</Text> }
            </>
            : <Text style={styles.lableTextAlert}>Has No Dental Policy.</Text>}
            { hasspouse ? <>
                { hascanpol ? <>
                    { canpolco2 ? <Text style={styles.lableText}>Spouse Cancer Policy: {canpolco2} for {canpolprem2}/Month </Text> 
                    : <Text style={styles.lableTextAlert}>Spouse Cancer Policy: None Entered</Text> }
                </>
                : null }
                { hasdental ? <>
                    { dentalco2 ? <Text style={styles.lableText}>Spouse Dental Policy: {dentalco2} for {dentalprem2}/Month </Text> 
                    : <Text style={styles.lableTextAlert}>Spouse Dental Policy: None Entered</Text> }
                </>
                : null}
            </> : null}


                <Text style={styles.headerText}>Life Insurance</Text> 
            { haslife ? <>
                { lifeco1 ? <Text style={styles.lableText}>Company: {lifeco1}</Text> 
                : <Text style={styles.lableTextAlert}>Company: None Entered</Text>}
                { lifeface1 ? <Text style={styles.lableText}>Face Amount: {lifeface1}</Text> 
                : <Text style={styles.lableTextAlert}>Face Amount: None Entered {lifeface1}</Text> }
                { lifeprem1 === 0 ? <Text style={styles.lableTextAlert}>Premium: {lifeprem1}</Text>
                : <Text style={styles.lableText}>Premium: {lifeprem1}</Text> }
            </>
            :<> 
                <Text style={styles.lableTextAlert}>{fname1} Has No Life Insurance</Text>
            </> }
            { hasspouse ? <>
                {spousehaslife ? <>        
                    { lifeco2 ? <Text style={styles.lableText}>Spouse Company: {lifeco2}</Text> 
                    : <Text style={styles.lableTextAlert}>Spouse Company: None Entered</Text> }
                    { lifeface2 ? <Text style={styles.lableText}>Spouse Face Amount: {lifeface2}</Text> 
                    :<Text style={styles.lableTextAlert}>Spouse Face Amount: None Entered</Text> }
                    { lifeprem2 === 0 ? <Text style={styles.lableTextAlert}>Spouse Premium: {lifeprem2}</Text> 
                    : <Text style={styles.lableText}>Spouse Premium: {lifeprem2}</Text> }
                </>
                : <>
                    <Text style={styles.lableTextAlert}>{fname2} Has No Life Insurance</Text>
                </>}
            </> 
            : null }

            
            <Text style={styles.headerText}>Retirement</Text> 
            { haswilltrust ? <>
            <Text style={styles.lableText}>{fname1} has a Trust</Text>
            </>
            :<>
                <Text style={styles.lableTextAlert}>{fname1} does not have a Trust</Text>
            </> }

            { !reffname1 || !refphone1 ? <>
                <View style={{marginTop: 20}}>
                    <View
                    style={{
                        borderBottomColor: 'red',
                        borderBottomWidth: 1,
                    }}
                    />
                    <Text style={{ textAlign: 'center', fontSize:30, color:'red'}}>You don't have any Referrals!</Text>
                    <View
                    style={{
                        borderBottomColor: 'red',
                        borderBottomWidth: 1,
                    }}
                    />
                </View>
            </> : null}
        </View>

    )
}

export default Review

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 10
    },
    headerText: {
        fontSize: 18,
        marginTop: 10,
    },
    lableText: {
        marginTop: 3
    },
    lableTextAlert: {
        marginTop: 3,
        color: 'red'
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
