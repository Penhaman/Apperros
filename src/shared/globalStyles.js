import {StyleSheet} from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#393e46'
    },
    logoBox: {
        backgroundColor: '#393e46',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        alignContent:'center'
    },
    titleText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#f5f5f5',
        shadowOffset: { width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        height: 160,
        width: 160,
        margin: 10,
    },
    searchB: {
        borderRadius: 10,
        fontFamily: 'ubuntu-regular',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 6,
    },
    ads: {
        position: 'absolute',
        bottom:0,
    },
    dContent: {
        flex:1,
    },
    userInfoSection: {
        paddingLeft: 60,
      },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        fontFamily: 'ubuntu-regular',
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1,
    },
    socialmedia: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent:'center',
        justifyContent: 'center'
    },
    contactLogo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        alignSelf:'center',
        marginVertical: 5,
    },
    header: {
        backgroundColor: '#00adb5',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 20,
        color: '#eeeeee',
        letterSpacing: 1,
        
    },
});