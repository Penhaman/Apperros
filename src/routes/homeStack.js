import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Kyocera from '../screens/kyocera';
import kyoceraDesc from '../screens/errorpages/kyoceraDesc';
import errorKyocera from '../screens/errorpages/errorKyocera';
import KonicaMinolta from '../screens/konicaminolta';
import minoltaDesc from '../screens/errorpages/minoltaDesc';
import Ricoh from '../screens/ricoh';
import ricohDesc from '../screens/errorpages/ricohDesc';
import Canon from '../screens/canon';
import canonDesc from '../screens/errorpages/canonDesc';
import Header from '../shared/header';
import {MaterialIcons} from '@expo/vector-icons';
import errorMinolta from '../screens/errorpages/errorMinolta';
import errorRicoh from '../screens/errorpages/errorRicoh';
import errorXerox from '../screens/errorpages/errorXerox';
import Xerox from '../screens/xerox';
import xeroxDesc from '../screens/errorpages/xeroxDesc';
import errorCanon from '../screens/errorpages/errorCanon';
import HP from '../screens/hp';
import errorHP from '../screens/errorpages/errorHP';
import hpDesc from '../screens/errorpages/hpDesc';


const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (
   
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
      name='Home'
      component={Home}
      options={{
        headerTitle: ({}) => <Header navigation={navigation} title='Printry' />,
        headerTitleAlign: 'center',
        headerLeft: () => <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} />
    }}
    />
    <Screen
      name='Kyocera'
      component={Kyocera}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Kyocera' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorKyocera'
      component={errorKyocera}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='kyoceraDesc'
      component={kyoceraDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='KonicaMinolta'
      component={KonicaMinolta}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Konica Minolta' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorMinolta'
      component={errorMinolta}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
        headerTitleAlign:'center'})}
    />
    <Screen
      name='minoltaDesc'
      component={minoltaDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='Ricoh'
      component={Ricoh}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Ricoh' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorRicoh'
      component={errorRicoh}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
        headerTitleAlign:'center'})}
    />
    <Screen
      name='ricohDesc'
      component={ricohDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='Xerox'
      component={Xerox}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Xerox' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorXerox'
      component={errorXerox}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
        headerTitleAlign:'center'})}
    />
    <Screen
      name='xeroxDesc'
      component={xeroxDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='Canon'
      component={Canon}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Canon' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorCanon'
      component={errorCanon}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
        headerTitleAlign:'center'})}
    />
    <Screen
      name='canonDesc'
      component={canonDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
    />
    <Screen
      name='HP'
      component={HP}
      options={{
        headerTitle: () => <Header title='HP' />,
        headerTitleAlign: 'center',}}
    />
    <Screen
      name='errorHP'
      component={errorHP}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
        headerTitleAlign:'center'})}
    />
    <Screen
      name='hpDesc'
      component={hpDesc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center'})}
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

export default HomeStack;
