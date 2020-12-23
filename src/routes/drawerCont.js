import React from 'react';
import {View,Linking} from 'react-native';
import {Avatar, Drawer} from 'react-native-paper';
import {globalStyles} from '../shared/globalStyles';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerCont(props) {

    const urlInfo = () => {
        Linking.openURL('https://www.linkedin.com/in/jo%C3%A3o-pereira-11496872/');
    }
    
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={globalStyles.dContent}>
                    <View style={globalStyles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={
                                    require('../assets/logoapp.png')
                                }
                                size={150}
                            />
                        </View>
                    </View>

                    <Drawer.Section style={globalStyles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-box-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact"
                            onPress={() => {props.navigation.navigate('Contact')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={globalStyles.bottomDrawerSection}>
                <DrawerItem label="Printry &copy; 2020 João Pereira"
                onPress={urlInfo}
                />
            </Drawer.Section>
        </View>
    );
}