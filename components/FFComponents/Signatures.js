import React, { createRef } from 'react'
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'



const Signatures = ({hasspouse,
            }) => {

    return (
        <View style={styles.fullWidth, {flex: 1}}>
            <Text style={styles.titleText}>Signatures</Text>
            <Text style={styles.headerText}>Client Signature:</Text>
            { hasspouse ? <>
            <Text style={styles.headerText}>Spouse Signature:</Text>

            </>: null}
            <Text style={styles.headerText}>Agent Signature:</Text>
    
        </View>
    )
}

export default Signatures

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 20
    },
    lableText: {
        marginTop: 3
    },
    headerText: {
        fontSize: 15,
        paddingBottom: 5
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
        textAlignVertical: 'top',
        borderRadius: 4,
        backgroundColor: 'rgba(156,167,226,0.6)',
    },
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
      },
})
