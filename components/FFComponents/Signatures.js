import React, { useRef, useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SignatureScreen from 'react-native-signature-canvas'
import * as FileSystem from "expo-file-system"


const Signatures = ({hasspouse, fname1, lname1,
                clisig, setclisig,
                spousig, setspousig,
                agentsig, setagentsig
            }) => {

    const ref = useRef();

    
    const handleCliClear = () => {
        ref.current.clearSignature();
    };
    
    const handleCliConfirm = () => {
        ref.current.readSignature();
    };
    
    const handleCliOK = (signature) => {
        const path = FileSystem.cacheDirectory +  'clisign.png'
        FileSystem.writeAsStringAsync(
            path,
            signature.replace("data:image/png;base64,", ""),
            { encoding: FileSystem.EncodingType.Base64 }
            )
            .then(() => FileSystem.getInfoAsync(path))
            .then(console.log)
            .catch(console.error);
    };  

        
    return (
        <View style={styles.fullWidth}>
            <Text style={styles.titleText}>Signatures</Text>
            <Text style={styles.headerText}>{fname1} Signature:</Text>
                <View style={{width: '95%', height: 200}}>
                    <SignatureScreen ref={ref} onOK={handleCliOK} />
                    <View style={{flexDirection:'row',}}>
                        <View style={{flex:1}}>
                            <Button title="Clear" onPress={handleCliClear} />
                        </View>
                        <View stlye={{flex:.05}}>
                            <Text>       </Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button title="Confirm" onPress={handleCliConfirm} />
                        </View>
                    </View>
                </View>
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
