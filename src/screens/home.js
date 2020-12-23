import React from 'react';
import  { View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {globalStyles} from '../shared/globalStyles';

export default function Home ({navigation}) {
    
    const pressKyocera = () => {
        navigation.navigate('Kyocera');
    }
    const pressKonicaMinolta = () => {
        navigation.navigate('KonicaMinolta');
    }
    const pressRicoh = () => {
        navigation.navigate('Ricoh');
    }
    const pressCanon = () => {
        navigation.navigate('Canon');
    }
    const pressXerox = () => {
        navigation.navigate('Xerox');
    }
    const pressHp = () => {
        navigation.navigate('HP');
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
