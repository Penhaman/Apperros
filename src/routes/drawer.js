import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerCont} from './drawerCont';
import HomeStack from './homeStack';
import ContactStack from './contactStack';



const Drawer = createDrawerNavigator();
/*export const RootDrawerNavigator = () => (
  
); */

export const AppNavigator = () => (
  <NavigationContainer>
    
    <Drawer.Navigator drawerContent= {DrawerCont}>
      <Drawer.Screen 
        name="Home" 
        component={HomeStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;