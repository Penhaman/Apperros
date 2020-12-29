import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Brand from '../screens/Brand';
import Desc from '../screens/Desc';
import Error from '../screens/Error';
import Home from '../screens/home';
import Header from '../shared/header';


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
      name='Brand'
      component={Brand}
      options={({route}) => ({
        headerTitle: () => <Header navigation={navigation} title={route.params.name}/>,
        headerTitleAlign: 'center',
        title: route.params.name
      })}
    />
    <Screen
      name='Error'
      component={Error}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center',
      title: route.params.name})}
    />
    <Screen
      name='Desc'
      component={Desc}
      options={ ({route}) => ({headerTitle: <Header navigation={navigation} title = {route.params.name} />,
      headerTitleAlign:'center',
      title: route.params.name})}
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
