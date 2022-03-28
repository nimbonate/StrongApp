import { StyleSheet} from 'react-native'

const AlternateColor = '#E74212'
const AdminColor = '#9400D3'
const StrongColor = '#1f275b'


export const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingBottom: 20,
        marginTop:10
    },
    headingText: {
        fontSize: 18,
        marginVertical: 6
    },
    reviewText:{
        fontSize: 16,
        textAlign: 'center'
    },
    lableText: {
        marginTop: 4,
    },
    errorText: {
        marginBottom: 2,
        color: 'red',
        justifyContent: 'space-between'
    },
    fullWidth: {
        minWidth: '80%',
        marginBottom: 20,
    },
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {  
        backgroundColor: StrongColor,
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
    },
    switch: {
        marginBottom: 4
    },
    FFbuttonContainer: {
        color: 'rgba(0, 0, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        height: 80,
    },
    FFbutton: {  
        flex: 1,
        backgroundColor: StrongColor,
        width: '100%',
        padding: 15,
        borderRadius: 4,
        marginTop:10,
        marginBottom:20,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: StrongColor,
        borderWidth: 2,
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center'

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: StrongColor,
        fontWeight: '700',
        fontSize: 16,
    },
    textInputStyle: {
        width: '95%',
        height: 48,
        borderWidth: 2,
        borderColor: 'rgba(55, 55, 55, .5)',
        paddingLeft: 10,
        marginBottom: 5,
        borderRadius: 4,
        backgroundColor: 'rgba(156,167,226,0.6)',
    },
    responseInputStyle: {
        width: '98%',
        height: 144,
        borderWidth: 2,
        borderColor: 'rgba(55, 55, 55, .5)',
        paddingLeft: 10,
        textAlignVertical: 'top',
        borderRadius: 4,
        backgroundColor: 'rgba(156,167,226,0.6)',
        marginBottom: 4,
    },
    modalView: {
        flex: 1,
        margin: 20,
        marginVertical: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})
  
export const adminStyles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {  
        backgroundColor: AdminColor,
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        borderColor: AdminColor,
        alignItems: 'center',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: AdminColor,
        fontWeight: '700',
        fontSize: 16,
    }
})
