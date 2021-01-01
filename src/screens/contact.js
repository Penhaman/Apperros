import React from 'react';
import {Text, View, Linking, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../shared/globalStyles';
import Card from '../shared/card';
import { AdMobBanner } from 'expo-ads-admob';
import { FontAwesome } from '@expo/vector-icons';

export default function Contact () {
    
    const changeLinkedin = () => {
        Linking.openURL('https://www.linkedin.com/in/jo%C3%A3o-pereira-11496872/');
    }
    const changeGmail = () => {
        Linking.openURL('mailto:jluispenha@gmail.com');
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Image
                    style={globalStyles.contactLogo}
                    source={require('../assets/logoapp.png')}
                />
                <Text style={{fontFamily: 'ubuntu-regular', marginTop: 10,}}><Text style={{fontWeight: "bold"}}>Printry</Text> is an app designed to make copy and printer technician's life easier
            when repairing copiers and printers. {"\n"}{"\n"}
                If you have any suggestions to make the app better or even add more brands, models, drop me message via Email or LinkedIn.
                {"\n"}{"\n"}{"\n"}
                </Text>
            <View style={globalStyles.socialmedia}>
                <TouchableOpacity onPress={changeLinkedin}>
                    <FontAwesome name="linkedin-square" size={90} color='#2867B2'  />
                </TouchableOpacity>
                <TouchableOpacity onPress={changeGmail}>
                    <FontAwesome name="envelope" size={90} color="#BB001B" />
                </TouchableOpacity>
            </View>
            </Card>
            <AdMobBanner
                style={globalStyles.ads}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-4176358068972637/6253324686"
                servePersonalizedAds
                onDidFailToReceiveAdWithError={(err) => console.log(err)} />
        </View>
    );
}
