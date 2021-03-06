import * as React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {globalStyles} from '../shared/globalStyles';
import Card from '../shared/card';
import { gql, useQuery  } from '@apollo/client';
import { Searchbar } from 'react-native-paper';
import {AdMobBanner} from 'expo-ads-admob';
import { useEffect } from 'react';
import {useThrottle} from '@react-hook/throttle'


const getModels = (brandId, search) => {
    return gql`
    query Models {
        model(where: {id_brand: {_eq: ${brandId}}, name: {_ilike: "%${search}%"}}, limit: 20, order_by: {name: asc}) {
        name
        id
      }
    }   
`};

function ModelList(props) {
    const { loading, error, data } = useQuery(getModels(props.brandId, props.search));
  
    if (loading) return <Text></Text>;
  
    return (
        <View>
            {data && data.model && <FlatList data={data.model} keyExtractor={(item) => ""+item.id} renderItem={({item}) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Error', {
                    name: item.name, modelId: item.id})}>
                    <Card>
                        <Text style={globalStyles.titleText}> {item.name} </Text>
                    </Card>
                </TouchableOpacity>
            )} />}
        </View>
    );
  }

export default function Brand ({navigation, route}) {
    const [search, setSearch] = React.useState('');
    const [delayed, setDelayed] = useThrottle('', 3);

    useEffect(() => {
        setDelayed(search)
    }, [search]);

    return (
        <View style={globalStyles.container}>
            <Searchbar
                placeholder="Find a model.."
                onChangeText={setSearch}
                value={search}
                style={globalStyles.searchB}
            />
            <ModelList search={delayed} brandId={route.params.brandId} navigation={navigation}/>
            <AdMobBanner
            style={globalStyles.ads}
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-4176358068972637/6253324686"
            servePersonalizedAds
            onDidFailToReceiveAdWithError={(err) => console.log(err)} />
        </View>
    );
}
