import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Keyboard, KeyboardAvoidingView, View, StyleSheet, ScrollView, Alert, Text } from 'react-native'
import Auxiliary from '../../components/FFComponents/Auxiliary'
import Autofill from '../../components/FFComponents/Autofill'
import Basics from '../../components/FFComponents/Basics'
import Medical from '../../components/FFComponents/Medical'
import LongTerm from '../../components/FFComponents/LongTerm'
import FinalExpense from '../../components/FFComponents/FinalExpense'
import Retirement from '../../components/FFComponents/Retirement'
import Referrals from '../../components/FFComponents/Referrals'
import Review from '../../components/FFComponents/Review'

import { styles } from '../../components/styles'

import { db } from '../../firebase'
import { authentication } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore/lite'


const FactFinder = ({ navigation }) => {

    //Alert telling Agents they have no Referrals (Needs State from Child Component?)
    /*(const noRefAlert = () =>
        Alert.alert(
        "You don't have any Referrals",
        "Are you sure you'd like to submit?",
        [
        {
            text: "Cancel",
            onPress: () => console.log("Went Back for Referrals"),
            style: "cancel",
        },
        {
            text: "Submit",
            onPress: () => navigation.replace('Dashboard') + console.log("Form Not Actually Submitted"),
        }
        ],
        {
        cancelable: false,
        }
    ); */


    //Declaring all of the useState hook variables.

    //For giving extra room at the bottom when the keyboard is up
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    //Pages of the fact finder within this parent file.
    const [page, setpage] = useState(0)
    
    //Search AgencyBloc (Autofill)
    const [searchname, setsearchname] = useState('')//used to search through AgencyBloc without changing the other
    const [individualID, setindividualID] = useState('') //used for Detail AgencyBloc Calls

    //If clientIndex is null, it is a new client. if clientIndex is not null, they are updating an existing client.
    const [clientIndex, setClientIndex] = useState(null) //Used to change UI of selected Client


    //Basics
    const [firstName, setfirstName] = useState('')
    const [spouseFirstName, setspouseFirstName] = useState('')
  
    const [hasSpouse, sethasSpouse] = useState(false)

    const [lastName, setlasName] = useState('')
    const [spouseLastName, setspouseLastName] = useState('')
  
    const [ssn1, setssn1] = useState('')
    const [ssn2, setssn2] = useState('')

    const [Phone1, setPhone1] = useState('')
    const [Phone2, setPhone2] = useState('')
    const [Phone3, setPhone3] = useState('')

    const [occ1, setocc1] = useState('')
    const [occ2, setocc2] = useState('')

    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zip, setzip] = useState('')

    //Medical
    const [hasadv, sethasadv] = useState(false)
    const [advdduct, setadvdduct] = useState('')
    const [spousehasadv, setspousehasadv] = useState(false)
    const [spouseadvdduct, setspouseadvdduct] = useState('')

    const [hco1, sethco1] = useState('')
    const [hplan1, sethplan1] = useState('')
    const [hprem1, sethprem1] = useState('')
    const [rxco1, setrxco1] = useState('')
    
    const [hco2, sethco2] = useState('')
    const [hplan2, sethplan2] = useState('')
    const [hprem2, sethprem2] = useState('')
    const [rxco2, setrxco2] = useState('')

    const [concerns, setconcerns] = useState('')
    const [changes, setchanges] = useState('')

    //Long Term Care

    const [hasltc, sethasltc] = useState(false)
    const [ecareben1, setecareben1] = useState('')
    const [ecareco1, setecareco1] = useState('')
    const [ecareprem1, setecareprem1] = useState('')
    const [ecareben2, setecareben2] = useState('')
    const [ecareco2, setecareco2] = useState('')
    const [ecareprem2, setecareprem2] = useState('')

    const [know, setknow] = useState(false)
    const [nhaffect, setnhaffect] = useState('')
    const [nhconcerns, setnhconcerns] = useState('')
    const [burdenconcerns, setburdenconcerns] = useState('')

    //Auxiliary
    const [hascanpol, sethascanpol] = useState(false)
    const [canpolco1, setcanpolco1] = useState('')
    const [canpolprem1, setcanpolprem1] = useState('')
    const [canpolcash1, setcanpolcash1] = useState('')
    const [canpolco2, setcanpolco2] = useState('')
    const [canpolprem2, setcanpolprem2] = useState('')
    const [canpolcash2, setcanpolcash2] = useState('')
    
    const [cancosts, setcancosts] = useState('')
    
    const [hasdental, sethasdental] = useState(false)
    const [dentalco1, setdentalco1] = useState('')
    const [dentalprem1, setdentalprem1] = useState('')
    const [dentalco2, setdentalco2] = useState('')
    const [dentalprem2, setdentalprem2] = useState('')

    const [hicopay1, sethicopay1] = useState('')
    const [hicopay2, sethicopay2] = useState('')
    const [hibind, sethibind] = useState(false)
    const [hiplans, sethiplans] = useState('')
    
    //Final Expense
    
    const [haslife, sethaslife] = useState(false) 
    const [spousehaslife, setspousehaslife] = useState(false) 

    const [lifeco1, setlifeco1] = useState('')
    const [lifeben1, setlifeben1] = useState('')
    const [lifeface1, setlifeface1] = useState('')
    const [lifeprem1, setlifeprem1] = useState('')

    const [lifeco2, setlifeco2] = useState('')
    const [lifeben2, setlifeben2] = useState('')
    const [lifeface2, setlifeface2] = useState('')
    const [lifeprem2, setlifeprem2] = useState('')
    
    const [lifeplans, setlifeplans] = useState('')

    const [haswilltrust, sethaswilltrust] = useState(false)
    const [trustrev, settrustrev] = useState('')
    const [hasprop, sethasprop] = useState(false)
    const [hasmulti, sethasmulti] = useState(false)
    const [hasblended, sethasblended] = useState(false)
    const [hasautos, sethasautos] = useState(false)
    const [hascash, sethascash] = useState(false)

    //Retirement

    const [ssfeel, setssfeel] = useState('')
    const [monthlyss, setmonthlyss] = useState('')
    const [monthlypen, setmonthlypen] = useState('')
    const [monthlyexp, setmonthlyexp] = useState('')
    const [cansave, setcansave] = useState(false)
    const [savings, setsavings] = useState('')
    const [realestate, setrealestate] = useState('')
    const [mutuals, setmutuals] = useState('')
    const [licash, setlicash] = useState('')
    const [annuities, setannuities] = useState('')
    const [stocks, setstocks] = useState('')
    const [bonds, setbonds] = useState('')
    const [moneymkts, setmoneymkts] = useState('')
    const [cds, setcds] = useState('')
    const [iras, setiras] = useState('')
    const [forohwonk, setforohwonk] = useState('')
    const [other, setother] = useState('')
    
    const [whythese, setwhythese] = useState('')
    const [goodreturns, setgoodreturns] = useState(false)
    const [motivation, setmotivation] = useState('')
    const [incomeconcerns, setincomeconcerns] = useState('')

    //Referrals

    const [reffirstName, setreffirstName] = useState('')
    const [reflastName, setreflastName] = useState('')
    const [refphone1, setrefphone1] = useState('')
    const [refaddy1, setrefaddy1] = useState('')
    
    const [reffname2, setreffname2] = useState('')
    const [reflname2, setreflname2] = useState('')
    const [refphone2, setrefphone2] = useState('')
    const [refaddy2, setrefaddy2] = useState('')
    
    const [reffname3, setreffname3] = useState('')
    const [reflname3, setreflname3] = useState('')
    const [refphone3, setrefphone3] = useState('')
    const [refaddy3, setrefaddy3] = useState('')
    
    const [reffname4, setreffname4] = useState('')
    const [reflname4, setreflname4] = useState('')
    const [refphone4, setrefphone4] = useState('')
    const [refaddy4, setrefaddy4] = useState('')
    
    const [reffname5, setreffname5] = useState('')
    const [reflname5, setreflname5] = useState('')
    const [refphone5, setrefphone5] = useState('')
    const [refaddy5, setrefaddy5] = useState('')
    
    const [reffname6, setreffname6] = useState('')
    const [reflname6, setreflname6] = useState('')
    const [refphone6, setrefphone6] = useState('')
    const [refaddy6, setrefaddy6] = useState('')
    
    const [reffname7, setreffname7] = useState('')
    const [reflname7, setreflname7] = useState('')
    const [refphone7, setrefphone7] = useState('')
    const [refaddy7, setrefaddy7] = useState('')
    
    const [reffname8, setreffname8] = useState('')
    const [reflname8, setreflname8] = useState('')
    const [refphone8, setrefphone8] = useState('')
    const [refaddy8, setrefaddy8] = useState('')
    
    const [reffname9, setreffname9] = useState('')
    const [reflname9, setreflname9] = useState('')
    const [refphone9, setrefphone9] = useState('')
    const [refaddy9, setrefaddy9] = useState('')
    
    const [reffname0, setreffname0] = useState('')
    const [reflname0, setreflname0] = useState('')
    const [refphone0, setrefphone0] = useState('')
    const [refaddy0, setrefaddy0] = useState('')

    const [refnumber, setrefnumber] = useState(3)

    //Signatures

    const [clisig, setclisig] = useState('')
    const [spousig, setspousig] = useState('')
    const [agentsig, setagentsig] = useState('')


    const submitAlert = () => {
        Alert.alert(
        "Are you sure?",
        "Fact Finder will be submitted for Review",
        [
        {
            text: "Cancel",
            onPress: () => console.log("Form Not Submitted"),
            style: "cancel",
        },
        {
            text: "Submit",
            onPress: () =>  SubmitFF() + navigation.replace('Dashboard'),
        }
        ],
            {
            cancelable: false,
            }
        );

    };
    
    const FactFinder = doc(db, `factFinders/${lastName} ${firstName}`)//Sets up a document within the factFinders collection
    //Submits data as a series of Key Value Pairs
    const SubmitFF = () => {
        const FFData = {
            reviewed: false,
            Agent: authentication.currentUser.email,
            Basics: {
                FirstName: firstName,
                LastName: lastName,
                hasSpouse: hasSpouse,
                SpouseFirstName: spouseFirstName,
                SpouseLastName: spouseLastName,
                ssn1: ssn1,
                ssn2: ssn2,
                Phone1: Phone1,
                Phone2: Phone2,
                Phone3: Phone3,
                occ1: occ1,
                occ2: occ2,
                Address: address,
                City: city,
                State: state,
                Zip: zip
            },
            Medical: {
                hco1: hco1,
                hplan1: hplan1,
                hprem1: hprem1,
                rxco1: rxco1,
                hco2: hco2,
                hplan2: hplan2,
                hprem2: hprem2,
                rxco2: rxco2,
                advdduct: advdduct,
                spouseadvdduct: spouseadvdduct,
                concerns: concerns,
                changes: changes
            },
            LongTermCare: {
                hasltc: hasltc,
                ecareben1: ecareben1,
                ecareco1: ecareco1,
                ecareprem1: ecareprem1,
                ecareben2: ecareben2,
                ecareco2: ecareco2,
                ecareprem2: ecareprem2,
                know: know,
                nhaffect: nhaffect,
                nhconcerns: nhconcerns,
                burdenconcerns: burdenconcerns,
            },
            Auxiliary: {
                hascanpol: hascanpol,
                canpolco1: canpolco1,
                canpolprem1: canpolprem1,
                canpolcash1: canpolcash1,
                canpolco2: canpolco2,
                canpolprem2: canpolprem2,
                canpolcash2: canpolcash2,
                CanCosts: cancosts,
                hasdental: hasdental,
                dentalco1: dentalco1,
                dentalprem1: dentalprem1,
                dentalco2: dentalco2,
                dentalprem2: dentalprem2,
                hasadv: hasadv,
                spousehasadv: spousehasadv,
                hicopay1: hicopay1,
                hicopay2: hicopay2,
                hibind: hibind,
                hiplans: hiplans
            },
            FinalExpense: {
                haslife: haslife,
                spousehaslife: spousehaslife,
                lifeco1: lifeco1,
                lifeco2: lifeco2,
                lifeben1: lifeben1,
                lifeben2: lifeben2,
                lifeface1: lifeface1,
                lifeface2: lifeface2,
                lifeprem1: lifeprem1,
                lifeprem2: lifeprem2,
                lifeplans: lifeplans
            },
            Retirement: {
                haswilltrust: haswilltrust,
                trustrev: trustrev,
                hasprop: hasprop,
                hasmulti: hasmulti,
                hasblended: hasblended,
                hasautos: hasautos,
                hascash: hascash,
                ssfeel: ssfeel,
                monthlyss: monthlyss,
                monthlypen: monthlypen,
                monthlyexp: monthlyexp,
                cansave: cansave,
                savings: savings,
                realestate: realestate,
                mutuals: mutuals,
                licash: licash,
                annuities: annuities,
                stocks: stocks,
                bonds: bonds,
                moneymkts: moneymkts,
                cds: cds,
                iras: iras,
                forohwonk: forohwonk,
                other: other,
                whythese: whythese,
                goodreturns: goodreturns,
                motivation: motivation,
                incomeconcerns: incomeconcerns
            }

        };
        setDoc(FactFinder, FFData);//Sends the document and data to Firebase.
    }

    //An array with references to all of the pages and the state variables used on that page.
    const steps=[{
        name: 'Autofill Check',
        component: <Autofill 
            searchname={searchname}
            setsearchname={setsearchname}
            ssn1={ssn1}
            setssn1={setssn1}

            individualID={individualID}
            setindividualID={setindividualID}
            firstName={firstName}
            setfirstName={setfirstName}
            lastName={lastName}
            setlasName={setlasName}
            spouseFirstName={spouseFirstName}
            setspouseFirstName={setspouseFirstName}
            spouseLastName={spouseLastName}
            setspouseLastName={setspouseLastName}
            Phone1={Phone1}
            setPhone1={setPhone1}
            Phone2={Phone2}
            setPhone2={setPhone2}
            Phone3={Phone3}
            address={address}
            setaddress={setaddress}
            city={city}
            setcity={setcity}
            state={state}
            setstate={setstate}
            zip={zip}
            setzip={setzip}
            clientIndex={clientIndex}
            setClientIndex={setClientIndex}
            />
    },{
        name: 'Basics',
        component: <Basics 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            individualID={individualID}
            setindividualID={setindividualID}
            setfirstName={setfirstName}
            firstName={firstName}
            setlasName={setlasName}
            lastName={lastName}
            sethasSpouse={sethasSpouse}
            hasSpouse={hasSpouse}

            setspouseFirstName={setspouseFirstName}
            spouseFirstName={spouseFirstName}
            setspouseLastName={setspouseLastName}
            spouseLastName={spouseLastName}

            Phone1={Phone1}
            setPhone1={setPhone1}
            Phone2={Phone2}
            setPhone2={setPhone2}
            Phone3={Phone3}
            setPhone3={setPhone3}

            setocc1={setocc1}
            occ1={occ1}
            setocc2={setocc2}
            occ2={occ2}
            
            setaddress={setaddress}
            address={address}
            setcity={setcity}
            city={city}
            setstate={setstate}
            state={state}
            setzip={setzip}
            zip={zip}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}
            />
    },
    {
        name: 'Medical',
        component: <Medical 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            hasSpouse={hasSpouse}
            hasadv={hasadv}
            sethasadv={sethasadv}
            spousehasadv={spousehasadv}
            setspousehasadv={setspousehasadv}
            advdduct={advdduct}
            setadvdduct={setadvdduct}
            spouseadvdduct={spouseadvdduct}
            setspouseadvdduct={setspouseadvdduct}
            hco1={hco1}
            sethco1={sethco1}
            hplan1={hplan1}
            sethplan1={sethplan1}
            hprem1={hprem1}
            sethprem1={sethprem1}

            rxco1={rxco1}
            setrxco1={setrxco1}

            hco2={hco2}
            sethco2={sethco2}
            hplan2={hplan2}
            sethplan2={sethplan2}
            hprem2={hprem2}
            sethprem2={sethprem2}

            rxco2={rxco2}
            setrxco2={setrxco2}

            concerns={concerns}
            setconcerns={setconcerns}
            changes={changes}
            setchanges={setchanges}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}

        />
    },
    {
        name: 'LongTerm',
        component: <LongTerm 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            hasSpouse={hasSpouse}

            hasltc={hasltc}
            sethasltc={sethasltc}
            ecareben1={ecareben1}
            setecareben1={setecareben1}
            ecareco1={ecareco1}
            setecareco1={setecareco1}
            ecareprem1={ecareprem1}
            setecareprem1={setecareprem1}

            ecareben2={ecareben2}
            setecareben2={setecareben2}
            ecareco2={ecareco2}
            setecareco2={setecareco2}
            ecareprem2={ecareprem2}
            setecareprem2={setecareprem2}

            know={know}
            setknow={setknow}
            nhaffect={nhaffect}
            setnhaffect={setnhaffect}
            nhconcerns={nhconcerns}
            setnhconcerns={setnhconcerns}
            burdenconcerns={burdenconcerns}
            setburdenconcerns={setburdenconcerns}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}
        />
    },
    {
        name:'Auxiliary',
        component: <Auxiliary 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            hasSpouse={hasSpouse}

            hascanpol={hascanpol}
            sethascanpol={sethascanpol}

            canpolco1={canpolco1}
            setcanpolco1={setcanpolco1}
            canpolprem1={canpolprem1}
            setcanpolprem1={setcanpolprem1}
            canpolcash1={canpolcash1}
            setcanpolcash1={setcanpolcash1}
            canpolco2={canpolco2}
            setcanpolco2={setcanpolco2}
            canpolprem2={canpolprem2}
            setcanpolprem2={setcanpolprem2}
            canpolcash2={canpolcash2}
            setcanpolcash2={setcanpolcash2}

            cancosts={cancosts}
            setcancosts={setcancosts}
            
            hasdental={hasdental}
            sethasdental={sethasdental}

            dentalco1={dentalco1}
            setdentalco1={setdentalco1}
            dentalprem1={dentalprem1}
            setdentalprem1={setdentalprem1}
            dentalco2={dentalco2}
            setdentalco2={setdentalco2}
            dentalprem2={dentalprem2}
            setdentalprem2={setdentalprem2}

            hasadv={hasadv}
            spousehasadv={spousehasadv}
            hicopay1={hicopay1}
            sethicopay1={sethicopay1}
            hicopay2={hicopay2}
            sethicopay2={sethicopay2}
            hibind={hibind}
            sethibind={sethibind}
            hiplans={hiplans}
            sethiplans={sethiplans}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}
        />
    },
    {
        name:'Final Expense',
        component: <FinalExpense 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            hasSpouse={hasSpouse}

            haslife={haslife}
            sethaslife={sethaslife}
            spousehaslife={spousehaslife}
            setspousehaslife={setspousehaslife}
            lifeco1={lifeco1}
            setlifeco1={setlifeco1}
            lifeben1={lifeben1}
            setlifeben1={setlifeben1}
            lifeface1={lifeface1}
            setlifeface1={setlifeface1}
            lifeprem1={lifeprem1}
            setlifeprem1={setlifeprem1}

            lifeco2={lifeco2}
            setlifeco2={setlifeco2}
            lifeben2={lifeben2}
            setlifeben2={setlifeben2}
            lifeface2={lifeface2}
            setlifeface2={setlifeface2}
            lifeprem2={lifeprem2}
            setlifeprem2={setlifeprem2}
            lifeplans={lifeplans}
            setlifeplans={setlifeplans}

            haswilltrust={haswilltrust}
            sethaswilltrust={sethaswilltrust}
            trustrev={trustrev}
            settrustrev={settrustrev}
            hasprop={hasprop}
            sethasprop={sethasprop}
            hasmulti={hasmulti}
            sethasmulti={sethasmulti}
            hasblended={hasblended}
            sethasblended={sethasblended}
            hasautos={hasautos}
            sethasautos={sethasautos}
            hascash={hascash}
            sethascash={sethascash}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}
            />
    },
    {
        name:'Retirement Income',
        component: <Retirement 
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}   
            hasSpouse={hasSpouse}
            
            ssfeel={ssfeel}
            setssfeel={setssfeel}

            monthlyss={monthlyss}
            setmonthlyss={setmonthlyss}
            monthlypen={monthlypen}
            setmonthlypen={setmonthlypen}
            monthlyexp={monthlyexp}
            setmonthlyexp={setmonthlyexp}
            
            cansave={cansave}
            setcansave={setcansave}
            
            savings={savings}
            setsavings={setsavings}
            realestate={realestate}
            setrealestate={setrealestate}
            mutuals={mutuals}
            setmutuals={setmutuals}
            licash={licash}
            setlicash={setlicash}
            annuities={annuities}
            setannuities={setannuities}
            stocks={stocks}
            setstocks={setstocks}
            bonds={bonds}
            setbonds={setbonds}
            moneymkts={moneymkts}
            setmoneymkts={setmoneymkts}
            cds={cds}
            setcds={setcds}
            iras={iras}
            setiras={setiras}
            forohwonk={forohwonk}
            setforohwonk={setforohwonk}
            other={other}
            setother={setother}
            
            whythese={whythese}
            setwhythese={setwhythese}
            goodreturns={goodreturns}
            setgoodreturns={setgoodreturns}
            motivation={motivation}
            setmotivation={setmotivation}
            incomeconcerns={incomeconcerns}
            setincomeconcerns={setincomeconcerns}

            clientIndex={clientIndex}
            setClientIndex={setClientIndex}

        />
    },
    {
        name:'Referrals',
        component: <Referrals
            isKeyboardVisible={isKeyboardVisible}
            setKeyboardVisible={setKeyboardVisible}
            reffirstName={reffirstName}
            setreffirstName={setreffirstName}
            reflastName={reflastName}
            setreflastName={setreflastName}
            refphone1={refphone1}
            setrefphone1={setrefphone1}
            refaddy1={refaddy1}
            setrefaddy1={setrefaddy1}
            reffname2={reffname2}
            setreffname2={setreffname2}
            reflname2={reflname2}
            setreflname2={setreflname2}
            refphone2={refphone2}
            setrefphone2={setrefphone2}
            refaddy2={refaddy2}
            setrefaddy2={setrefaddy2}
            reffname3={reffname3}
            setreffname3={setreffname3}
            reflname3={reflname3}
            setreflname3={setreflname3}
            refphone3={refphone3}
            setrefphone3={setrefphone3}
            refaddy3={refaddy3}
            setrefaddy3={setrefaddy3}
            reffname4={reffname4}
            setreffname4={setreffname4}
            reflname4={reflname4}
            setreflname4={setreflname4}
            refphone4={refphone4}
            setrefphone4={setrefphone4}
            refaddy4={refaddy4}
            setrefaddy4={setrefaddy4}
            reffname5={reffname5}
            setreffname5={setreffname5}
            reflname5={reflname5}
            setreflname5={setreflname5}
            refphone5={refphone5}
            setrefphone5={setrefphone5}
            refaddy5={refaddy5}
            setrefaddy5={setrefaddy5}
            reffname6={reffname6}
            setreffname6={setreffname6}
            reflname6={reflname6}
            setreflname6={setreflname6}
            refphone6={refphone6}
            setrefphone6={setrefphone6}
            refaddy6={refaddy6}
            setrefaddy6={setrefaddy6}
            reffname7={reffname7}
            setreffname7={setreffname7}
            reflname7={reflname7}
            setreflname7={setreflname7}
            refphone7={refphone7}
            setrefphone7={setrefphone7}
            refaddy7={refaddy7}
            setrefaddy7={setrefaddy7}
            reffname8={reffname8}
            setreffname8={setreffname8}
            reflname8={reflname8}
            setreflname8={setreflname8}
            refphone8={refphone8}
            setrefphone8={setrefphone8}
            refaddy8={refaddy8}
            setrefaddy8={setrefaddy8}
            reffname9={reffname9}
            setreffname9={setreffname9}
            reflname9={reflname9}
            setreflname9={setreflname9}
            refphone9={refphone9}
            setrefphone9={setrefphone9}
            refaddy9={refaddy9}
            setrefaddy9={setrefaddy9}
            reffname0={reffname0}
            setreffname0={setreffname0}
            reflname0={reflname0}
            setreflname0={setreflname0}
            refphone0={refphone0}
            setrefphone0={setrefphone0}
            refaddy0={refaddy0}
            setrefaddy0={setrefaddy0}
            refnumber={refnumber}
            setrefnumber={setrefnumber}

        />
    },
    {
        name:'Review and Submit',
        component: <Review 
            reffirstName={reffirstName}
            refphone1={refphone1}
            firstName={firstName}
            lastName={lastName}
            hasSpouse={hasSpouse}
            spouseFirstName={spouseFirstName}
            spouseLastName={spouseLastName}
            Phone1={Phone1}
            Phone2={Phone2}
            Phone3={Phone3}
            occ1={occ1}
            occ2={occ2}
            address={address}
            city={city}
            state={state}
            zip={zip}
            hco1={hco1}
            hplan1={hplan1}
            hprem1={hprem1}
            rxco1={rxco1}
            hco2={hco2}
            hplan2={hplan2}
            hprem2={hprem2}
            rxco2={rxco2}
            concerns={concerns}
            changes={changes}
            hasltc={hasltc}
            ecareben1={ecareben1}
            ecareco1={ecareco1}
            ecareprem1={ecareprem1}
            ecareben2={ecareben2}
            ecareco2={ecareco2}
            ecareprem2={ecareprem2}
            know={know}
            nhaffect={nhaffect}
            nhconcerns={nhconcerns}
            burdenconcerns={burdenconcerns}
            hascanpol={hascanpol}
            canpolco1={canpolco1}
            canpolprem1={canpolprem1}
            canpolcash1={canpolcash1}
            canpolco2={canpolco2}
            canpolprem2={canpolprem2}
            canpolcash2={canpolcash2}
            cancosts={cancosts}
            hasdental={hasdental}
            dentalco1={dentalco1}
            dentalprem1={dentalprem1}
            dentalco2={dentalco2}
            dentalprem2={dentalprem2}
            hasadv={hasadv}
            hicopay1={hicopay1}
            hicopay2={hicopay2}
            hibind={hibind}
            hiplans={hiplans}
            haslife={haslife}
            spousehaslife={spousehaslife}
            lifeco1={lifeco1}
            lifeben1={lifeben1}
            lifeface1={lifeface1}
            lifeprem1={lifeprem1}
            lifeco2={lifeco2}
            lifeben2={lifeben2}
            lifeface2={lifeface2}
            lifeprem2={lifeprem2}
            lifeplans={lifeplans}
            haswilltrust={haswilltrust}
            trustrev={trustrev}
            hasprop={hasprop}
            hasmulti={hasmulti}
            hasblended={hasblended}
            hasautos={hasautos}
            hascash={hascash}
            ssfeel={ssfeel}
            monthlyss={monthlyss}
            monthlypen={monthlypen}
            monthlyexp={monthlyexp}
            cansave={cansave}
            savings={savings}
            realestate={realestate}
            mutuals={mutuals}
            licash={licash}
            annuities={annuities}
            stocks={stocks}
            bonds={bonds}
            moneymkts={moneymkts}
            cds={cds}
            iras={iras}
            forohwonk={forohwonk}
            other={other}
            goodreturns={goodreturns}
            motivation={motivation}
            incomeconcerns={incomeconcerns}
            />
    },
    /*{
        name:'Signatures',
        component: <Signatures
            firstName={firstName}
            spouseFirstName={spouseFirstName}
            hasSpouse={hasSpouse}
            clisig={clisig}
            setclisig={setclisig}
            spousig={spousig}
            setspousig={setspousig}
            agentsig={agentsig}
            setagentsig={setagentsig}
            
        />
    }*/
    ]

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true); 
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false);
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);

    return (
        <KeyboardAvoidingView style={{maxHeight: '100%', minHeight: '100%', paddingBottom: 10}}>
                <ScrollView style={{marginHorizontal:5}}>
                    {
                        steps[page].component
                    }
                </ScrollView>
                <View style={styles.FFbuttonContainer}>
                    <View style={{flex:1}}>
                        {
                            page!== 0 ?
                        <TouchableOpacity title={'Back'} style={styles.FFbutton} onPress={() =>{ setpage(page - 1) }}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                        : null}
                    </View>
                    <View style={{flex:.05}}></View>
                    <View style={{flex:1}}>
                        {
                        page== steps.length - 1
                        ? <TouchableOpacity  title={'Submit Fact Finder'} style={styles.FFbutton} onPress={() =>{ submitAlert() }}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        : <TouchableOpacity  title={'Next'} style={styles.FFbutton} onPress={() =>{ setpage(page + 1) }}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                        }
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

export default FactFinder

