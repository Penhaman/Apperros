import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {globalStyles} from '../../shared/globalStyles';
import Card from '../../shared/card';
import {AdMobBanner} from 'expo-ads-admob';

export default function errorHP ({navigation, route}) {
    const data = route.params.errors;
    const errors =  Object.keys(data);
    return (
        <View style={globalStyles.container}>
            <FlatList data={errors} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('hpDesc', {
                   name: item, description: data[item].description, remedy: data[item].remedy})}>
                    <Card>
                        <Text style={globalStyles.titleText}> {item} </Text>
                    </Card>
                </TouchableOpacity>
            )} />
            <AdMobBanner
            style={globalStyles.ads}
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-4176358068972637/6253324686"
            servePersonalizedAds
            onDidFailToReceiveAdWithError={(err) => console.log(err)} />
        </View>
    );
}
