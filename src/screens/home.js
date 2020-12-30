import React from 'react';
import  { View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {globalStyles} from '../shared/globalStyles';

export default function Home ({navigation}) {
    
    const pressKyocera = () => {
        navigation.navigate('Brand', {brandId: 10, name: 'Kyocera'});
    }
    const pressKonicaMinolta = () => {
        navigation.navigate('Brand', {brandId: 5, name: 'Konica-Minolta'});
    }
    const pressRicoh = () => {
        navigation.navigate('Brand', {brandId: 9, name: 'Ricoh'});
    }
    const pressCanon = () => {
        navigation.navigate('Brand', {brandId: 2, name: 'Canon'});
    }
    const pressXerox = () => {
        navigation.navigate('Brand', {brandId: 13, name: 'Xerox'});
    }
    const pressHp = () => {
        navigation.navigate('Brand', {brandId: 4, name: 'HP'});
    }

    return (
        <ScrollView style={{backgroundColor: '#393e46'}}>
        <View style={globalStyles.logoBox}>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressKyocera}>
                    <Image source={require('../assets/logos/kyocera.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressKonicaMinolta}>
                <Image source={require('../assets/logos/minolta.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressRicoh}>
                <Image source={require('../assets/logos/ricoh.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressCanon}>
                <Image source={require('../assets/logos/canon.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressXerox}>
                <Image source={require('../assets/logos/xerox.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.card}>
                <TouchableOpacity onPress={pressHp}>
                <Image source={require('../assets/logos/hp.png')} style={globalStyles.logo} />
                </TouchableOpacity>
            </View>
        </View>
        
        </ScrollView>
        
    );
}
