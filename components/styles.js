import { StyleSheet, Dimensions} from 'react-native'

const window = Dimensions.get('window');

const StrongColor = '#1f275b'
const DarkColor = '#162640'
const LightColor = '#d5e5ff'
const BrightColor = '#95bdfb'
const White = '#ffffff'
const ExpoColor = '#f5f5f5'
export const PlaceholderTextColor = 'gray'


export const styles = StyleSheet.create({
    arch: {
        marginTop: - window.width * 2,
        borderRadius: window.width,
        backgroundColor: StrongColor,
        height: window.width * 2,
        width: window.width * 2
    },
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
    fullWidthCenter: {
        alignItems: 'center',
        minWidth: '80%',
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
        shadowColor: DarkColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: .7,
        shadowRadius: 1,
    },
    switch: {
        marginBottom: 4
    },
    neumorphismSection: {
        width: '90%',
        backgroundColor: ExpoColor,
        shadowColor: StrongColor,
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginVertical: 5,
    },
    sectionHighlight: {
        padding: 20,
        backgroundColor: ExpoColor,
        shadowColor: White,
        shadowOffset: {
            width: -1,
            height: -1
        },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    sectionShadow: {
        shadowColor: StrongColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 1
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
        shadowColor: DarkColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: .6,
        shadowRadius: 1,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: StrongColor,
        borderWidth: 2,
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
        shadowColor: DarkColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: .7,
        shadowRadius: 1,
    },
    infoOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: StrongColor,
        borderWidth: 2,
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
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
        paddingLeft: 10,
        marginBottom: 5,
        borderRadius: 4,
        backgroundColor: White,
    },
    responseInputStyle: {
        width: '98%',
        height: 144,
        paddingLeft: 10,
        textAlignVertical: 'top',
        borderRadius: 4,
        backgroundColor: White,
        marginBottom: 4,
    },
    modalView: {
        flex: 1,
        margin: 20,
        marginVertical: 50,
        backgroundColor: ExpoColor,
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: DarkColor,
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
        shadowColor: White,
        shadowOffset: {
            width: -2,
            height: -2
        },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    buttonHighlight: {
        shadowColor: White,
        shadowOffset: {
            width: -2,
            height: -2
        },
        shadowOpacity: 1,
        shadowRadius: 1
    },
    button: {  
        backgroundColor: ExpoColor,
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: StrongColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 1
    },
    buttonOutline: {
        backgroundColor: ExpoColor,
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        borderColor: LightColor,
        alignItems: 'center',
        borderWidth: 2,
        shadowColor: StrongColor,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    buttonText: {
        color: BrightColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: BrightColor,
        fontWeight: '700',
        fontSize: 16,
    }
})
