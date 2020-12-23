import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {StyleSheet, Modal, View, Text} from 'react-native';
import Home from '../screens/home';
import Kyocera from '../screens/kyocera';
import errorKyocera from '../screens/errorpages/errorKyocera';
import KonicaMinolta from '../screens/konicaminolta';
import Ricoh from '../screens/ricoh';
import Canon from '../screens/canon';
import Header from '../shared/header';
import {MaterialIcons} from '@expo/vector-icons';
import errorMinolta from '../screens/errorpages/errorMinolta';
import errorRicoh from '../screens/errorpages/errorRicoh';
import errorXerox from '../screens/errorpages/errorXerox';
import Xerox from '../screens/xerox';
import errorCanon from '../screens/errorpages/errorCanon';
import HP from '../screens/hp';
import errorHP from '../screens/errorpages/errorHP';

 
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Home' />,
                headerRight: () => (
                    <MaterialIcons name='info' size={28} onPress={navigation.navigate('About')} style={styles.icon} />
                  ),
            }
        }
    },
    Kyocera: {
        screen: Kyocera,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Kyocera' />,
                headerTitleAlign: 'center',
            }
        }
    },
    errorKyocera: {
        screen: errorKyocera,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',
            }
        },
    },
    KonicaMinolta: {
        screen: KonicaMinolta,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Konica Minolta' />,
                headerTitleAlign: 'center',
        }
    },
    errorMinolta: {
        screen: errorMinolta,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',
            }
        },
    },
    Ricoh: {
        screen: Ricoh,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Ricoh' />,
                headerTitleAlign: 'center',
            }
        }
    },
    errorRicoh: {
        screen: errorRicoh,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',
            }
        },
    },
    Xerox: {
        screen: Xerox,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Xerox' />,
                headerTitleAlign: 'center',
            }
        }
    },
    errorXerox: {
        screen: errorXerox,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',

            }
        },
    },
    Canon: {
        screen: Canon,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Canon' />,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <MaterialIcons name='info' size={28} onPress={openMenu} style={styles.icon} />
                  ),
            }
        }
    },
    errorCanon: {
        screen: errorCanon,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <MaterialIcons name='info' size={28} onPress={openMenu} style={styles.icon} />
                  ),
            }
        },
    },
    HP: {
        screen: HP,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='HP' />,
                headerTitleAlign: 'center',
            }
        }
    },
    errorHP: {
        screen: errorHP,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={navigation.getParam('name')} />,
                headerTitleAlign: 'center',
            }
        },
    },
}}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00adb5',
            height: 60,
        },
        headerTintColor: '#eeeeee',
    }
    });

export default createAppContainer(HomeStack);

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        right: 16,
        color: '#eeeeee',
    },
})