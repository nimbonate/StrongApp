import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { db } from '../../firebase'
import { collection } from 'firebase/firestore'


const FFList = () => {

    const [FactFinderList, setFactFinderList] = useState([]);

    const getFFs = () => {
        const FFCollection = collection(db, 'factFinders');
        const response = FFCollection.get();
        setFactFinderList(response);
        console.log('is this thing on?' + response)
    }
    

    useEffect(() => {
      getFFs();
    }, []);
    

    return (
        <View>
            <View style={{height: 80}}/>
            <Text style={{textAlign:'center'}}>Submitted Fact Finders</Text>
            {FactFinderList.map((SubmittedFF, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => {}}
                    >
                    <Text style={styles.buttonText}>{SubmittedFF.FirstName} {SubmittedFF.LastName}</Text>
                </TouchableOpacity> ))}
        </View>
    )
}

export default FFList

const styles = StyleSheet.create({
    button: {  
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#0782f9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})
