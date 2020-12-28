import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, {useState} from 'react';
import * as Font from 'expo-font';

import AppLoading from 'expo-app-loading';
import AppNavigator from './src/routes/drawer';

const getFonts = () => Font.loadAsync({
    'ubuntu-regular': require('./src/assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./src/assets/fonts/Ubuntu-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return (
    <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    );
  }

}
