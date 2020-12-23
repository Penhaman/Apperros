import React from 'react';
import {StyleSheet} from 'react-native';
import Header from '../shared/header';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/contact';
import {MaterialIcons} from '@expo/vector-icons';

const { Navigator, Screen } = createStackNavigator();

export const  ContactStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
        headerStyle: {
            backgroundColor: '#00adb5',
            height: 60,
        },
        headerTintColor: '#eeeeee',
    }}
  >
    <Screen
      name='Contact'
      component={Contact}
      options={{ 
        headerTitle: () => <Header navigation={navigation} title='Contact' />,
        headerTitleAlign: 'center',
        headerLeft: () => <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} />
        }}
    />
  </Navigator>
);
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 16,
        color: '#eeeeee',
    },
})
export default ContactStack;