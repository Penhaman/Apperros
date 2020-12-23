import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import {globalStyles} from '../../shared/globalStyles';
import Card from '../../shared/card';


export default function minoltaDesc ({route}) {
    const description = route.params.description;
    const causes = route.params.causes;
    const remedy = route.params.remedy;
    
    return (
        <ScrollView>
        <View style={globalStyles.container}>
                    
                    <Card>
                        <Text style={globalStyles.titleText}>Description: </Text>
                            <Text style={globalStyles.paragraph}>{description} </Text>
                        <Text style={globalStyles.titleText}>Causes: </Text>
                            <Text style={globalStyles.paragraph}>{causes}</Text>
                        <Text style={globalStyles.titleText}>Remedy: </Text>
                            <Text style={globalStyles.paragraph}>{remedy}</Text>
                    </Card>
        
        </View>
        </ScrollView>
    );
}
