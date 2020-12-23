import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../shared/globalStyles';
import Card from '../../shared/card';
import {AdMobBanner} from 'expo-ads-admob';

export default function hpDesc ({route}) {
    const description = route.params.description;
    const remedy = route.params.remedy;
    return (
        <View style={globalStyles.container}>
                    <Card>
                        <Text style={globalStyles.titleText}> {description} </Text>
                        <Text style={globalStyles.titleText}> {remedy} </Text>
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
