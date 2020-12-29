import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, {useState} from 'react';
import * as Font from 'expo-font';

import AppLoading from 'expo-app-loading';
import AppNavigator from './src/routes/drawer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const getFonts = () => Font.loadAsync({
    'ubuntu-regular': require('./src/assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./src/assets/fonts/Ubuntu-Bold.ttf')
  });

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.9.133:8080/v1/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  } else {
    return (
    <AppLoading 
      startAsync={getFonts}
      onError={console.warn}
      onFinish={() => setFontsLoaded(true)}
    />
    );
  }

}
