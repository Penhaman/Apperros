import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../../shared/globalStyles';
import Card from '../../shared/card';
import { AdMobBanner } from 'expo-ads-admob';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useThrottle } from '@react-hook/throttle'
import { Searchbar } from 'react-native-paper';

const GET_ERROR = (modelId, code) => {
    return gql`
    query Error {
        error(limit: 20, order_by: {code: asc}, where: {id_model: {_eq: ${modelId}}, code: {_ilike: "%${code}%"}}) {
          cause
          code
          description
          remedy
          id
        }
      }   
`};

export default function errorKyocera({ navigation, route }) {
    const [search, setSearch] = React.useState('');
    const [delayed, setDelayed] = useThrottle('', 3);
    const { loading, error, data } = useQuery(GET_ERROR(route.params.modelId, delayed));

    useEffect(() => {
        setDelayed(search)
    }, [search]);

    return (
        <View style={globalStyles.container}>
            <Searchbar
                placeholder="Find an error.."
                onChangeText={setSearch}
                value={search}
                style={globalStyles.searchB}
            />
            {
                data && data.error && <FlatList data={data.error} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('kyoceraDesc', {
                        name: item.code, description: item.description, causes: item.causes, remedy: item.remedy
                    })}>
                        <Card>
                            <Text style={globalStyles.titleText}> {item.code} </Text>
                        </Card>
                    </TouchableOpacity>
                )} />
            }
            <AdMobBanner
                style={globalStyles.ads}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-4176358068972637/6253324686"
                servePersonalizedAds
                onDidFailToReceiveAdWithError={(err) => console.log(err)} />
        </View>
    );
}
