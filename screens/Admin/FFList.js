import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Modal } from 'react-native'
import { db } from '../../firebase'
import { collection, where, query, getDocs } from 'firebase/firestore/lite'
import { styles, adminStyles } from '../../components/styles'


const FFList = () => {

    const [FactFinderList, setFactFinderList] = useState([]);
    const [modalVisible, setmodalVisible] = useState(false);
    const [docData, setdocData] = useState([]);
    
    //gets the data from firestore and sets it as FactFinderList
    const getFFs = async() => {
        const FFCollection = query(collection(db, 'factFinders'), where("reviewed", "==", false));
        const FFsnapshot = await getDocs(FFCollection);
        setFactFinderList(FFsnapshot.docs);
    }
    

    useEffect(() => {
      getFFs();
      console.log('FF List UseEffect Ran')
    }, []);
    

    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Submitted Fact Finders</Text>
            {FactFinderList.map((doc, index) => (
            <View style={adminStyles.buttonHighlight}>
                <TouchableOpacity
                    key={index}
                    style={adminStyles.button}
                    onPress={() => {setdocData(doc.data()) + setmodalVisible(true)}}
                    >
                    <Text style={adminStyles.buttonText}>{doc.id}</Text>
                </TouchableOpacity>
            </View>
            ))}
            { modalVisible ? <Modal
                style={{height:800}}
                visible={modalVisible}
                transparent='true'>
                <View style={styles.modalView}>
                <ScrollView >
                    {/*Fact Finder Information Shown Here*/}  
                        <Text style={styles.headingText}>Submiting Agent:</Text>
                        <Text style={styles.reviewText}>{docData.Agent}</Text>
                        <Text style={styles.headingText}>Basics</Text>
                    { docData.Basics.hasSpouse ?<>
                        { docData.Basics.FirstName ? <Text style={styles.lableText}>Name: {docData.Basics.FirstName} {docData.Basics.LastName}</Text> 
                        : <Text style={styles.errorText}>Name: None Entered</Text>}
                        { docData.Basics.SpouseFirstName ? <Text style={styles.lableText}>Spouse Name: {docData.Basics.SpouseFirstName} {docData.Basics.SpouseLastName}</Text> 
                        : <Text style={styles.errorText}>Spouse Name: None Entered</Text>}
                        </>
                    : <> 
                        { docData.Basics.FirstName ? <>
                        <Text style={styles.lableText}>Name: {docData.Basics.FirstName} {docData.Basics.LastName}</Text>
                        </> : <> 
                        <Text style={styles.errorText}>Name: None Entered</Text>
                        </>}
                    </>}
                    { docData.Basics.Address ? <>
                        <Text style={styles.lableText}>Address: {docData.Basics.Address}</Text>
                        <Text style={styles.lableText}>{docData.Basics.City}, {docData.Basics.State} {docData.Basics.Zip}</Text>
                    </> : <Text style={styles.errorText}>No Address Entered</Text>}
                    { docData.Basics.Phone1 ? <Text style={styles.lableText}>Home Phone: {docData.Basics.Phone1} </Text> 
                    : null }
                    { docData.Basics.Phone2 ? <Text style={styles.lableText}>Cell Phone: {docData.Basics.Phone2} </Text> 
                    : null }
                    { docData.Basics.Phone3 ? <Text style={styles.lableText}>Spouse Cell Phone: {docData.Basics.Phone3} </Text> 
                    : null }
                    { !docData.Basics.Phone1 && !docData.Basics.Phone2 && !docData.Basics.Phone3 ? <Text style={styles.errorText}>No Phone Entered</Text>
                    : null}


                    <Text style={styles.headingText}>Medical</Text>
                    { docData.Auxiliary.hasadv ? <>
                        <Text style={styles.lableText}>Advantage Company: {docData.Medical.hco1}</Text>
                        <Text style={styles.lableText}>Hospital Copay: {docData.Auxiliary.hicopay1}</Text>
                    </> 
                    :<>
                    { docData.Medical.hplan1 ? <Text style={styles.lableText}>Health Plan: {docData.Medical.hplan1} with {docData.Medical.hco1} for {docData.Medical.hprem1}/Month</Text>
                    : <Text style={styles.errorText}>Health Plan: None Entered</Text>}
                    { docData.Medical.rxco1 ? <Text style={styles.lableText}>Rx Coverage: {docData.Medical.rxco1}</Text>
                    :<Text style={styles.errorText}>Rx Coverage: None Entered</Text>}
                    </>}
                    { docData.Basics.hasSpouse ?<>
                    { docData.Auxiliary.spousehasadv ?<>
                        <Text style={styles.lableText}>Spouse Advantage Company: {docData.Medical.hco2}</Text>
                        <Text style={styles.lableText}>Spouse Hospital Copay: {docData.Auxiliary.SpouseHospitalCopay}</Text>
                    </>
                    :<>
                        { docData.Medical.hplan2 ? <Text style={styles.lableText}>Spouse Health Plan: {docData.Medical.hplan2} with {docData.Medical.hco2} for {docData.Medical.hprem2}/Month</Text> 
                        : <Text style={styles.errorText}>Health Plan: None Entered</Text>}
                        { docData.Medical.rxco2 ? <Text style={styles.lableText}>Spouse Rx Coverage: {docData.Medical.rxco2}</Text>
                        : <Text style={styles.errorText}>Rx Coverage: None Entered</Text>}
                    </>}
                    </>: null}

                
                    <Text style={styles.headingText}>Long Term Care</Text>
                    { docData.LongTermCare.hasltc ? <>
                    { docData.LongTermCare.ecareco1 ? <Text style={styles.lableText}>Company: {docData.LongTermCare.ecareco1} for {docData.LongTermCare.ecareprem1}</Text>
                        : <Text style={styles.errorText}>Company: None Entered</Text> } 
                    </>
                    :<> 
                    <Text style={styles.errorText}>Has No Long Term Care.</Text>
                    </>}
                    { docData.Basics.hasSpouse ? <>
                    { docData.LongTermCare.hasltc ? <>
                        { docData.LongTermCare.ecareco2 ? <Text style={styles.lableText}>Company 2: {docData.LongTermCare.ecareco2} for {docData.LongTermCare.ecareprem2}</Text>
                        : <Text style={styles.errorText}>Company 2: None Entered</Text> }
                    </>    
                    : null}
                    </> : null }


                    <Text style={styles.headingText}>Auxilliary Insurance</Text>
                    { docData.Auxiliary.hascanpol ? <> 
                    { docData.Auxiliary.canpolco1 ? <Text style={styles.lableText}>Cancer Policy: {docData.Auxiliary.canpolco1} for {docData.Auxiliary.canpolprem1}/Month </Text> 
                    : <Text style={styles.errorText}>Cancer Policy: None Entered</Text>}
                    </>
                    : <Text style={styles.errorText}>Has No Cancer Policy.</Text>}
                    { docData.Auxiliary.hasdental ? <>
                    { docData.Auxiliary.dentalco1 ? <Text style={styles.lableText}>Dental Policy: {docData.Auxiliary.dentalco1} for {docData.Auxiliary.dentalprem1}/Month </Text> 
                    : <Text style={styles.errorText}>Dental Policy: None Entered</Text> }
                    </>
                    : <Text style={styles.errorText}>Has No Dental Policy.</Text>}
                    { docData.Basics.hasSpouse ? <>
                    { docData.Auxiliary.hascanpol ? <>
                        { docData.Auxiliary.canpolco2 ? <Text style={styles.lableText}>Spouse Cancer Policy: {docData.Auxiliary.canpolco2} for {docData.Auxiliary.canpolprem2}/Month </Text> 
                        : <Text style={styles.errorText}>Spouse Cancer Policy: None Entered</Text> }
                    </>
                    : null }
                    { docData.Auxiliary.hasdental ? <>
                        { docData.Auxiliary.dentalco2 ? <Text style={styles.lableText}>Spouse Dental Policy: {docData.Auxiliary.dentalco2} for {docData.Auxiliary.dentalprem2}/Month </Text> 
                        : <Text style={styles.errorText}>Spouse Dental Policy: None Entered</Text> }
                    </>
                    : null}
                    </> : null}


                    <Text style={styles.headingText}>Life Insurance</Text> 
                    { docData.FinalExpense.haslife ? <>
                    { docData.FinalExpense.lifeco1 ? <Text style={styles.lableText}>Company: {docData.FinalExpense.lifeco1}</Text> 
                    : <Text style={styles.errorText}>Company: None Entered</Text>}
                    { docData.FinalExpense.lifeface1 ? <Text style={styles.lableText}>Face Amount: {docData.FinalExpense.lifeface1}</Text> 
                    : <Text style={styles.errorText}>Face Amount: None Entered</Text> }
                    { docData.FinalExpense.lifeprem1 === 0 ? <Text style={styles.errorText}>Premium: {docData.FinalExpense.lifeprem1}</Text>
                    : <Text style={styles.lableText}>Premium: {docData.FinalExpense.lifeprem1}</Text> }
                    </>
                    :<> 
                    <Text style={styles.errorText}>{docData.Basics.FirstName} Has No Life Insurance</Text>
                    </> }
                    { docData.Basics.hasSpouse ? <>
                    {docData.FinalExpense.spousehaslife ? <>        
                        { docData.FinalExpense.lifeco2 ? <Text style={styles.lableText}>Spouse Company: {docData.FinalExpense.lifeco2}</Text> 
                        : <Text style={styles.errorText}>Spouse Company: None Entered</Text> }
                        { docData.FinalExpense.lifeface2 ? <Text style={styles.lableText}>Spouse Face Amount: {docData.FinalExpense.lifeface2}</Text> 
                        :<Text style={styles.errorText}>Spouse Face Amount: None Entered</Text> }
                        { docData.FinalExpense.lifeprem2 === 0 ? <Text style={styles.errorText}>Spouse Premium: {docData.FinalExpense.lifeprem2}</Text> 
                        : <Text style={styles.errorText}>Spouse Premium: {docData.FinalExpense.lifeprem2}</Text> }
                    </>
                    : <>
                        <Text style={styles.errorText}>Spouse Has No Life Insurance</Text>
                    </>}
                    </> 
                    : null }

                
                    <Text style={styles.headingText}>Retirement</Text> 
                    { docData.Retirement.haswilltrust ? <>
                    <Text style={styles.lableText}>{docData.Basics.FirstName} has a Trust</Text>
                    </>
                    :<>
                        <Text style={styles.errorText}>{docData.Basics.FirstName} does not have a Trust</Text>
                    </> }
                </ScrollView>

                    <TouchableOpacity
                    style={adminStyles.button}
                    onPress={() => {setmodalVisible(false)}}>
                        <Text style={adminStyles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> : null }
        </View>
    )
}

export default FFList

