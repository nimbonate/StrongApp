import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../styles'

const Review = ({hasSpouse, reffirstName, refphone1, clisig,
            firstName, lastName,
            spouseFirstName, spouseLastName,
            ssn1, ssn2,
            Phone1, Phone2,
            Phone3, occ1,
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


            <Text style={styles.headingText}>Basics</Text>
            { hasSpouse ?<>
                { firstName ? <Text style={styles.lableText}>Name: {firstName} {lastName}</Text> 
                : <Text style={styles.errorText}>Name: None Entered</Text>}
                { spouseFirstName ? <Text style={styles.lableText}>Spouse Name: {spouseFirstName} {spouseLastName}</Text> 
                : <Text style={styles.errorText}>Spouse Name: None Entered</Text>}
                </>
            : <> 
                { firstName ? <>
                    <Text style={styles.lableText}>Name: {firstName} {lastName}</Text>
                </> : <> 
                    <Text style={styles.errorText}>Name: None Entered</Text>
                </>}
            </>}
            { address ? <>
                <Text style={styles.lableText}>Address: {address}</Text>
                <Text style={styles.lableText}>{city}, {state} {zip}</Text>
            </> : <Text style={styles.errorText}>No Address Entered</Text>}
            { Phone1 ? <Text style={styles.lableText}>Home Phone: {Phone1} </Text> 
            : null }
            { Phone2 ? <Text style={styles.lableText}>Cell Phone: {Phone2} </Text> 
            : null }
            { Phone3 ? <Text style={styles.lableText}>Spouse Cell Phone: {Phone3} </Text> 
            : null }
            { !Phone1 && !Phone2 && !Phone3 ? <Text style={styles.errorText}>No Phone Entered</Text>
            : null}


            <Text style={styles.headingText}>Medical</Text>
            { hasadv ? <>
                <Text style={styles.lableText}>Advantage Company: {hco1}</Text>
                <Text style={styles.lableText}>Hospital Copay: {hicopay1}</Text>
            </> 
            :<>
                { hplan1 ? <Text style={styles.lableText}>Health Plan: {hplan1} with {hco1} for {hprem1}/Month</Text>
                : <Text style={styles.errorText}>Health Plan: None Entered</Text>}
                { rxco1 ? <Text style={styles.lableText}>Rx Coverage: {rxco1}</Text>
                :<Text style={styles.errorText}>Rx Coverage: None Entered</Text>}
            </>}
            { hasSpouse ?<>
                { spousehasadv ?<>
                    <Text style={styles.lableText}>Spouse Advantage Company: {hco2}</Text>
                    <Text style={styles.lableText}>Spouse Hospital Copay: {hicopay2}</Text>
                </>
                :<>
                    { hplan2 ? <Text style={styles.lableText}>Spouse Health Plan: {hplan2} with {hco2} for {hprem2}/Month</Text> 
                    : <Text style={styles.errorText}>Health Plan: None Entered</Text>}
                    { rxco2 ? <Text style={styles.lableText}>Spouse Rx Coverage: {rxco2}</Text>
                    : <Text style={styles.errorText}>Rx Coverage: None Entered</Text>}
                </>}
            </>: null}

            
            <Text style={styles.headingText}>Long Term Care</Text>
            { hasltc ? <>
                { ecareco1 ? <Text style={styles.lableText}>Extended Care Company: {ecareco1} for {ecareprem1}</Text>
                    : <Text style={styles.errorText}>Extended Care Company: None Entered</Text> } 
            </>
            :<> 
                <Text style={styles.errorText}>Has No Long Term Care.</Text>
            </>}
            { hasSpouse ? <>
                { hasltc ? <>
                    { ecareco2 ? <Text style={styles.lableText}>Extended Care Company: {ecareco2} for {ecareprem2}</Text>
                    : <Text style={styles.errorText}>Extended Care Company: None Entered</Text> }
                </>    
                : null}
            </> : null }


            <Text style={styles.headingText}>Auxilliary Insurance</Text>
            { hascanpol ? <> 
                { canpolco1 ? <Text style={styles.lableText}>Cancer Policy: {canpolco1} for {canpolprem1}/Month </Text> 
                : <Text style={styles.errorText}>Cancer Policy: None Entered</Text>}
            </>
            : <Text style={styles.errorText}>Has No Cancer Policy.</Text>}
            { hasdental ? <>
                { dentalco1 ? <Text style={styles.lableText}>Dental Policy: {dentalco1} for {dentalprem1}/Month </Text> 
                : <Text style={styles.errorText}>Dental Policy: None Entered</Text> }
            </>
            : <Text style={styles.errorText}>Has No Dental Policy.</Text>}
            { hasSpouse ? <>
                { hascanpol ? <>
                    { canpolco2 ? <Text style={styles.lableText}>Spouse Cancer Policy: {canpolco2} for {canpolprem2}/Month </Text> 
                    : <Text style={styles.errorText}>Spouse Cancer Policy: None Entered</Text> }
                </>
                : null }
                { hasdental ? <>
                    { dentalco2 ? <Text style={styles.lableText}>Spouse Dental Policy: {dentalco2} for {dentalprem2}/Month </Text> 
                    : <Text style={styles.errorText}>Spouse Dental Policy: None Entered</Text> }
                </>
                : null}
            </> : null}


                <Text style={styles.headingText}>Life Insurance</Text> 
            { haslife ? <>
                { lifeco1 ? <Text style={styles.lableText}>Company: {lifeco1}</Text> 
                : <Text style={styles.errorText}>Company: None Entered</Text>}
                { lifeface1 ? <Text style={styles.lableText}>Face Amount: {lifeface1}</Text> 
                : <Text style={styles.errorText}>Face Amount: None Entered {lifeface1}</Text> }
                { lifeprem1 === 0 ? <Text style={styles.errorText}>Premium: {lifeprem1}</Text>
                : <Text style={styles.lableText}>Premium: {lifeprem1}</Text> }
            </>
            :<> 
                <Text style={styles.errorText}>{firstName} Has No Life Insurance</Text>
            </> }
            { hasSpouse ? <>
                {spousehaslife ? <>        
                    { lifeco2 ? <Text style={styles.lableText}>Spouse Company: {lifeco2}</Text> 
                    : <Text style={styles.errorText}>Spouse Company: None Entered</Text> }
                    { lifeface2 ? <Text style={styles.lableText}>Spouse Face Amount: {lifeface2}</Text> 
                    :<Text style={styles.errorText}>Spouse Face Amount: None Entered</Text> }
                    { lifeprem2 === 0 ? <Text style={styles.errorText}>Spouse Premium: {lifeprem2}</Text> 
                    : <Text style={styles.lableText}>Spouse Premium: {lifeprem2}</Text> }
                </>
                : <>
                    <Text style={styles.errorText}>Spouse Has No Life Insurance</Text>
                </>}
            </> 
            : null }

            
            <Text style={styles.headingText}>Retirement</Text> 
            { haswilltrust ? <>
            <Text style={styles.lableText}>{firstName} has a Trust</Text>
            </>
            :<>
                <Text style={styles.errorText}>{firstName} does not have a Trust</Text>
            </> }

            { !reffirstName || !refphone1 ? <>
                <View style={{marginTop: 20}}>
                    <View
                    style={{
                        borderBottomColor: 'red',
                        borderBottomWidth: 1,
                    }}
                    />
                    <Text style={{ 
                        textAlign: 'center', 
                        fontSize:30, 
                        color:'red'
                        }}>You don't have any Referrals!</Text>
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
